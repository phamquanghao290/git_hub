import { Module } from '@nestjs/common';
import { MaillerService } from './mailler.service';
import { MaillerController } from './mailler.controller';

@Module({
  controllers: [MaillerController],
  providers: [MaillerService],
})
export class MaillerModule {}
