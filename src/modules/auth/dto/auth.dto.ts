import { PickType } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';
import { Auth } from '../entities/auth.entity';

export class AuthDto extends PickType(Auth, [] as const) {
  @IsString()
  @MinLength(6)
  newPassword: string;
}