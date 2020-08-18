import { Injectable } from '@nestjs/common';
import * as fs from 'fs-extra';
import * as util from 'util';
import { CreateAssistantDTO as CreateAsstDTO } from './assistant.dto';
import { pkgTemplate } from './origin/statics';

@Injectable()
export class CommandService {
  execute = util.promisify(require('child_process').exec);
  write = fs.promises.writeFile;
  generatedId = '';
  generatedDir = '';
  configLocation = '';

  public async genAsstDirFromId(generatedId: string): Promise<void> {
    this.generatedId = generatedId;
    this.generatedDir = `src/assistant/generated/${this.generatedId}`;
    this.configLocation = `./${this.generatedDir}/src/config.ts`;

    await fs.copy('src/assistant/origin', this.generatedDir);
  }

  public async genAsstPkg(requestBody: CreateAsstDTO): Promise<any> {
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
    return { id: this.generatedId, ...userPref };
  }

  public async genAsstRules(requestBody: CreateAsstDTO): Promise<any> {
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
      return populatedRules;
    } catch (err) {
      console.error(err.message);
    }
  }

  public async genAsstFile(): Promise<void> {
    try {
      console.log('Generating assistant file...');
      const { stdout: cmdReponse } = await this.execute(
        `cd ${this.generatedDir} && npm run package-tarball`,
      );
      console.log(cmdReponse);
      console.log('File created!');
    } catch (err) {
      console.error(err.message);
    }
  }
  public async findAsstDirByLoc(location: string): Promise<boolean> {
    return await fs.pathExists(location);
  }

  public async getAsstFileByLoc(location: string): Promise<string> {
    const existingFileArray = await fs.readdir(`${location}/out`);
    const foundFile = existingFileArray.find((fileName: string) =>
      fileName.includes('tgz'),
    );

    if (!foundFile) return;

    return `${location}/out/${foundFile}`;
  }

  public async deleteLocation(location: string): Promise<void> {
    await fs.remove(location);
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
