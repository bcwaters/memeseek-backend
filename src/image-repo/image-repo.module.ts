import { Module } from '@nestjs/common';
import { ImageRepoService } from './image-repo.service';
import { ImageRepoController } from './image-repo.controller';
import { UploadService } from '../upload/upload.service'
@Module({
  imports: [ ],
  providers: [UploadService,ImageRepoService],
  controllers: [ImageRepoController]
})
export class ImageRepoModule {}
