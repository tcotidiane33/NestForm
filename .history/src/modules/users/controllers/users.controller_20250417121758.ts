import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { UserService } from '../services/users.services';
import { User } from '../entities/users.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';

@Controller('users')
export class UserController {
  constructor(private readonly service: UserService) {}

  @Post()
  async create(@Body() dto: CreateUserDto): Promise<User> {
    console.log('create dto');
    return this.service.create(dto);
  }

  @Get()
  async findAll(): Promise<User[]> {
    console.log('get data dto');
    return this.service.findAll();
  }

  @Get(':userId')
  async findOne(@Param('userId', ParseIntPipe) id: number): Promise<User> {
    return this.service.findOne(id);
  }

  @Patch(':userId')
  async update(
    @Param('userId', ParseIntPipe) id: number,
    @Body() dto: UpdateUserDto,
  ): Promise<User> {
    return this.service.update(id, dto);
  }

  @HttpCode(HttpStatus.NO_CONTENT)
  @Delete(':userId')
  async remove(@Param('userId', ParseIntPipe) id: number): Promise<void> {
    await this.service.remove(id);
    return;
  }
}
