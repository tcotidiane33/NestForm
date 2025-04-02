import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from './config/database.module';
import { UsersModule } from './modules/users/users.module';
import { UserController } from './modules/users/controllers/users.controller';
import { APP_PIPE } from '@nestjs/core';
import { CustomValidationPipe } from './common/pipes/custom-validation.pipe';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      expandVariables: true,
    }),
    DatabaseModule,
    UsersModule,
  ],
  controllers: [AppController, UserController],
  providers: [
    AppService,
    {
      provide: APP_PIPE,
      useValue: CustomValidationPipe,
    },
    {
      provide: 'JSONPLACEHOLDER_CLIENT',
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const axios = require('axios');
        return axios.create({
          baseURL: configService.get('JSONPLACEHOLDER_URL'),
        });
      },
    },
  ],
})
export class AppModule {}
