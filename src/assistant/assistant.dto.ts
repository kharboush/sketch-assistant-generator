import { ApiProperty } from '@nestjs/swagger';
import {
  ArrayNotEmpty,
  IsArray,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  Length,
} from 'class-validator';

export class GetAsstResponseDTO {
  dir: boolean;
  downloaded: boolean;
}

class RuleDTO {
  @IsNotEmpty()
  @IsString()
  @Length(3, 36)
  @ApiProperty({
    type: 'string',
    example: 'artboards-max-ungrouped-layers',
    description: 'Use a GET request to get all the rule definitions',
  })
  name: string;
  @IsNotEmpty()
  @IsObject()
  @ApiProperty({
    type: 'object',
    example: { active: true, maxUngroupedLayers: 5 },
    description:
      'Config depends on the rules. Use a GET request to get all definitions available',
  })
  config: any;
}

export class ReturnAssistantDTO {
  @IsNotEmpty()
  @IsString()
  @Length(3, 36)
  @ApiProperty({
    type: 'string',
    description: 'Name of the extended assistant',
    example: '@sketch-hq/sketch-core-assistant',
  })
  assistant: string;
  @IsArray()
  @ArrayNotEmpty()
  @ApiProperty({
    type: [RuleDTO],
    description: 'A list of extended rules from this assistant',
    items: {
      minItems: 1,
    },
  })
  rules: RuleDTO[];
}

export class CreateAssistantDTO {
  @IsNotEmpty()
  @IsString()
  @Length(3, 36)
  @ApiProperty({
    type: 'string',
    description: '3-36 characters',
    example: 'My first assistant',
  })
  name: string;
  @IsNotEmpty()
  @IsString()
  @Length(6, 72)
  @ApiProperty({
    type: 'string',
    description: '7-72 characters',
    example: 'Example name for the custom assistant',
  })
  description: string;
  @IsOptional()
  @IsString()
  @Length(1, 9)
  @ApiProperty({
    type: 'string',
    description: 'Optional version for package',
    example: '1.0.0',
  })
  version: string;
  @IsOptional()
  @IsString()
  @ApiProperty({
    type: 'string',
    description: 'Optional image URL, used inside Sketch',
    example:
      'https://user-images.githubusercontent.com/1078571/81808057-0e01b200-9517-11ea-95ae-8759f54dba13.png',
  })
  icon: string;
  @IsArray()
  @ArrayNotEmpty()
  @ApiProperty({
    description: 'A list of Assistants',
    type: [ReturnAssistantDTO],
    items: {
      minItems: 1,
    },
  })
  assistants: ReturnAssistantDTO[];
}
