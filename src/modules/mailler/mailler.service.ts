import { Injectable } from '@nestjs/common';
import { CreateMaillerDto } from './dto/create-mailler.dto';
import { UpdateMaillerDto } from './dto/update-mailler.dto';

@Injectable()
export class MaillerService {
  create(createMaillerDto: CreateMaillerDto) {
    return 'This action adds a new mailler';
  }

  findAll() {
    return `This action returns all mailler`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mailler`;
  }

  update(id: number, updateMaillerDto: UpdateMaillerDto) {
    return `This action updates a #${id} mailler`;
  }

  remove(id: number) {
    return `This action removes a #${id} mailler`;
  }
}
