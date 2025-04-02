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
import { Auth } from '../entities/auth.entity';
import { AuthDto } from '../dto/auth.dto';
import { log } from 'console';

@Controller('Auths')
export class AuthController {
  constructor(private readonly service: AuthService) {}

}
