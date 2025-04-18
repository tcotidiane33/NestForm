import { PickType } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';
import { User } from '../entities/users.entity';

export class UpdateUserDto extends PickType(User, ['name', 'email'] as const) {
  @IsString()
  @MinLength(6)
  newPassword: string;
}