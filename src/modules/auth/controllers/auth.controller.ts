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
import { AuthService } from '../services/auth.services';
import { Session } from '../entities/session.entity';
import { AuthDto } from '../dto/auth.dto';
import { log } from 'console';

@Controller('Session')
export class AuthController {
  constructor(private readonly service: AuthService) {}

}
