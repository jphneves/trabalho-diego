import { PartialType } from '@nestjs/mapped-types';
import { CreatePerdiacheiDto } from './create-perdiachei.dto';

export class UpdatePerdiacheiDto extends PartialType(CreatePerdiacheiDto) {}
