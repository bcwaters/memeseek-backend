// src/upload/upload.controller.ts

import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { UploadService } from './upload.service';
//TODO fix route from upload/uploadImage
//Update upload file naming approach
//https://docs.nestjs.com/techniques/file-upload
@Controller('upload')
export class UploadController {
  constructor(uploadService: UploadService) {}

  @Post('/uploadImage')
  @UseInterceptors(FileInterceptor('file'))
  async uploadImage(@UploadedFile() file) {
    return 'upload success';
  }
}
