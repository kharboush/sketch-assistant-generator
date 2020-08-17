import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as util from 'util';
import { v4 as uuidv4 } from 'uuid';
import { CreateAssistantDTO } from './assistant/assistant.dto';
import { pkgTemplate } from './assistant/origin/statics';

@Injectable()
export class CommandService {
  execute = util.promisify(require('child_process').exec);
  generatedName = `assistant-${uuidv4()}`;
  generatedDir = `src/assistant/${this.generatedName}`;
  configLocation: string;
  write = fs.promises.writeFile;

  public async generateAssistantDir(): Promise<void> {
    await this.execute(`cp -r src/assistant/origin ${this.generatedDir}`);
    this.configLocation = `./${this.generatedDir}/src/config.ts`;
  }

  public async generateAssistantPkg(
    requestBody: CreateAssistantDTO,
  ): Promise<void> {
    const parsedFileName = this.parseTitleToFileName(requestBody.name);

    const userPref = {
      name: parsedFileName,
      version: requestBody.version || '1.0.0',
      'sketch-assistant': {
        title: requestBody.name || 'Untitled Sketch Assistant',
        description: requestBody.description || 'No description provided.',
        icon: requestBody.icon || '',
      },
    };
    const options = { ...pkgTemplate, ...userPref };

    try {
      console.log('Generating package.json file...');
      await this.write(
        `./${this.generatedDir}/package.json`,
        JSON.stringify(options),
      );
      console.log('package.json created');
    } catch (err) {
      console.error(err.message);
    }
  }

  public async generateAssistantRules(
    requestBody: CreateAssistantDTO,
  ): Promise<void> {
    const populatedRules = requestBody.assistants.reduce((rules, req) => {
      req.rules.forEach(rule => {
        rules[`${req.assistant}/${rule.name}`] = rule.config;
      });

      return rules;
    }, {});

    try {
      console.log('Generating config file...');
      await this.write(
        this.configLocation,
        `
const CoreAssistant = require('@sketch-hq/sketch-core-assistant');
export const extendedAssistants = [CoreAssistant];
export const rules = ${JSON.stringify(populatedRules)};
        `,
      );
      console.log('config file created');
    } catch (err) {
      console.error(err.message);
    }
  }

  public async generateAssistantFile(): Promise<string> {
    try {
      console.log('Generating assistant file...');
      const { stdout: cmdReponse } = await this.execute(
        `cd ${this.generatedDir} && npm run package-tarball`,
      );
      console.log(cmdReponse);
      const { stdout: fileCreatedName } = await this.execute(
        `cd ${this.generatedDir}/out && ls`,
      );
      console.log('File created:', fileCreatedName);
      return this.getFilePath(cmdReponse);
    } catch (err) {
      console.error(err.message);
    }
  }

  public async runCleanup(): Promise<void> {
    try {
      await this.execute(`rm -rf ${this.generatedDir}`);
      'Directory cleaned up!';
    } catch (err) {
      console.error(err.message);
    }
  }

  // public async downloadRepo(repoName: string): Promise<void> {
  //   const url = `https://api.github.com/repos/${repoName}/tarball`;
  //   const fileName = `${repoName.split('/')[1]}.tar.gz`;
  //   const fileLocation = `./${this.generatedDIr}/out/${fileName}`;
  //   const createFile = fs.createWriteStream(fileLocation);

  //   const writeToFile = async response => {
  //     await response.data.pipe(createFile);
  //     return new Promise((resolve, reject) => {
  //       createFile.on('finish', () => resolve(true));
  //       createFile.on('error', (err: Error) => reject(err));
  //     });
  //   };

  //   try {
  //     const response = await axios({
  //       url,
  //       method: 'GET',
  //       responseType: 'stream',
  //     });
  //     await writeToFile(response);
  //     await this.unzipFile(fileLocation);
  //   } catch (err) {
  //     console.error(err.message);
  //   }
  // }

  // private async unzipFile(location: string) {
  //   return location;
  // }

  private getFilePath(cmdResponse: string): string {
    const responseArray: string[] = cmdResponse.split('\n');
    const fileName = responseArray.find(txt => txt.includes('.tgz'));
    return `${this.generatedDir}/out/${fileName}`;
  }

  private parseTitleToFileName(title: string): string {
    return title
      .split(' ')
      .join('-')
      .split(/[^a-zA-Z-]+/g)
      .join('')
      .toLowerCase();
  }
}
