import { Inject, Injectable } from '@nestjs/common';
import axios, { AxiosInstance } from 'axios';

@Injectable()
export class AppService {
  constructor(
    @Inject('JSONPLACEHOLDER_CLIENT')
    private readonly jsonPlaceholderClient: AxiosInstance,
    // private readonly jsonPlaceholderClient: any,
  ) {}

  getHello(): string {
    return 'Hello World!';
  }

  async getUsers(): Promise<any> {
    return (await this.jsonPlaceholderClient.get('/users')).data;
  }
}
