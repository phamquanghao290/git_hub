import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/register')
  async create(@Body() createUserDto: any) {
    return await this.usersService.create(createUserDto);
  }

  @Post('login')
  async login(@Body() userLogin: any) {
    const result = await this.usersService.login(userLogin);
    if (!result) {
      return {
        message:"Tai khoan khong ton tai"
      }
    }
    return {
      message:"Đăng nhập thành công",
      result
    }
  }


  @Get()
  findAll() {
    return this.usersService.findAll();
  }
}
