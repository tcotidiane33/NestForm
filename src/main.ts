import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);

  initSawgger(app);

  await app.listen(configService.get<number>('APP_PORT', 3000));
}
bootstrap();

function initSawgger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('TransApp')
    .setDescription('Transapp for finance compta')
    .setVersion('1.0')
    .addTag('Turbo')
    .build();

  const DocumentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, DocumentFactory);
}
