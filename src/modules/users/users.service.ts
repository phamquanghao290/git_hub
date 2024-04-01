import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import * as argon2 from 'argon2';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(@InjectRepository(User) private readonly userRepository:Repository<User>) {}
  async create(createUserDto: any) {
   const user = await this.userRepository.findOne({ where: { email: createUserDto.email } });
   if (user) {
    throw new Error('User already exists');
   }
   return await this.userRepository.save(createUserDto);
  }

  findAll() {
    return `This action returns all users`;
  }

  async login(userLogin:any){
    const {email, password} = userLogin;
    const user = await this.userRepository.findOne({ where: { email:email, password: password } });
    if (!user) {
      return null
    }
    return user
  }

  async findUserByEmail(email: string) {
    return await this.userRepository.findOne({ where: { email:email } });
  }
}
