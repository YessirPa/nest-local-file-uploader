import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Environment } from './environments/environment';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('NestJS Local Uploads Medias')
    .setDescription('API documentation for NestJS local file uploads')
    .setVersion('1.0')
    .addTag('file')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api-docs', app, documentFactory);

  await app.listen(Environment.port ?? 3500);

  console.log('Server starter on host : http://localhost:' + Environment.port);
}

bootstrap();
