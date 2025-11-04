import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FileUploadModule } from './file-upload/file-upload.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import { Environment } from './environments/environment';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.join(__dirname, '..', Environment.mediaLocalFolderSaved),

      //if use other folder on hardware
      //rootPath: path.join(os.homedir(), 'nest-local-uploads'),

      serveRoot: Environment.mediaServeRoot,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      ...Environment.databaseConfig,
    }),
    FileUploadModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
