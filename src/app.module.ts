import { Module } from '@nestjs/common';
import { User } from './modules/users/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './modules/users/users.module';
import { Product } from './modules/product/entities/product.entity';
import { Mailler } from './modules/mailler/entities/mailler.entity';
import { MaillerModule } from './modules/mailler/mailler.module';
import { ProductModule } from './modules/product/product.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'githup',
      entities: [User, Product, Mailler],
      synchronize: true,
    }),
    UsersModule, MaillerModule, ProductModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
