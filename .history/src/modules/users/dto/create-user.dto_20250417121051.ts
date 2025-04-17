import { IsString, MinLength } from 'class-validator';
import { User } from '../entities/users.entity';
import { PickType } from '@nestjs/swagger';

export class CreateUserDto extends PickType(User, ['name', 'email'] as const) {
  @IsString()
  @MinLength(6)
  newPassword: string;
}
