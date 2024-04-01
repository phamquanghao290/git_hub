import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MaillerService } from './mailler.service';
import { CreateMaillerDto } from './dto/create-mailler.dto';
import { UpdateMaillerDto } from './dto/update-mailler.dto';

@Controller('mailler')
export class MaillerController {
  constructor(private readonly maillerService: MaillerService) {}

  @Post()
  create(@Body() createMaillerDto: CreateMaillerDto) {
    return this.maillerService.create(createMaillerDto);
  }

  @Get()
  findAll() {
    return this.maillerService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.maillerService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMaillerDto: UpdateMaillerDto) {
    return this.maillerService.update(+id, updateMaillerDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.maillerService.remove(+id);
  }
}
