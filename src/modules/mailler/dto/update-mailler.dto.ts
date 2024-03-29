import { PartialType } from '@nestjs/mapped-types';
import { CreateMaillerDto } from './create-mailler.dto';

export class UpdateMaillerDto extends PartialType(CreateMaillerDto) {}
