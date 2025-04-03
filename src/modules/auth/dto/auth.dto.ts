import { PickType } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';
import { Session } from '../entities/session.entity';

export class AuthDto extends PickType(Session, [] as const) {
  @IsString()
  @MinLength(6)
  newPassword: string;
}