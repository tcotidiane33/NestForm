import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Session } from '../entities/session.entity';


@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Session)
    private SessionRepository: Repository<Session>,
  ) {}

}


