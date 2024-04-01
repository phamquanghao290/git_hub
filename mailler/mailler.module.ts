import { Module } from '@nestjs/common';
import { MaillerService } from './mailler.service';
import { MaillerController } from './mailler.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Mailler } from './entities/mailler.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Mailler])],
  controllers: [MaillerController],
  providers: [MaillerService],
})
export class MaillerModule {}
