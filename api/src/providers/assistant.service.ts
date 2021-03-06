import { Injectable } from '@nestjs/common';
import { Response } from 'express';
import { v4 as uuidv4 } from 'uuid';
import {
  CoreAssistantDTO, CreateAssistantDTO,
  GetAssistantStatus
} from '../statics/definitions.dto';
import rules from '../statics/rules';
import { CommandService } from './command.service';

@Injectable()
export class AssistantService {
  constructor(private readonly cmdServ: CommandService) { }

  public async createAssistant(reqBody: CreateAssistantDTO): Promise<any> {
    const createdId = `a-${uuidv4()}`;
    try {
      await this.cmdServ.genAsstDirFromId(createdId);
      const asstUserConfig = await this.cmdServ.genAsstPkg(reqBody);
      const asstRules = await this.cmdServ.genAsstRules(reqBody);
      this.cmdServ.genAsstFile();
      return { ...asstUserConfig, rules: asstRules };
    } catch (err) {
      console.error(err);
    }
  }

  public async getAssistant(
    res: Response,
    id: string,
  ): Promise<GetAssistantStatus> {
    const status = { dir: false, downloaded: false };
    const dir = `storage/${id}`;
    let foundFile = '';

    try {
      const foundDir = await this.cmdServ.findAsstDirByLoc(dir);

      if (foundDir) {
        status.dir = true;
        foundFile = await this.cmdServ.getAsstFileByLoc(dir);
        if (!foundFile) {
          return status;
        }
      } else {
        return status;
      }

      res.download(foundFile);
      status.downloaded = true;
    } catch (err) {
      console.error(err);
    }

    return status;
  }

  public async getAllRules(): Promise<CoreAssistantDTO[]> {
    return rules;
  }
}
