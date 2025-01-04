import { Injectable } from '@nestjs/common';
import { UploadService } from '../upload/upload.service';

//This service returns an image based on a request
//Idealy this is S3RepoService, since i am implemented image
//retrieval from S3
//I also want a FileSystem imiplementation
@Injectable()
export class ImageRepoService {
  private uploadPath: string;
  constructor(uploadService: UploadService) {
    this.uploadPath = uploadService.getUploadPath();
  }
  getUploadPath(): string {
    //return this.mockCatalog.getCatalog();
    return this.uploadPath + '/';
  }
}
