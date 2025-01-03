import { Injectable, Inject } from '@nestjs/common';
import { join } from 'path';
import { existsSync, mkdirSync } from 'fs';

@Injectable()
export class UploadService {
    //Injected catalog data
    private readonly uploadPath: string;


//TODO make upload path .env variable
    constructor(){
        console.log("UploadService Service Instantiated:");
        this.uploadPath = join(process.cwd(), 'uploads');
        console.log('UploadService path: ' + (this.uploadPath))

        //create DIRECTORY for uploads
         if (!existsSync(this.uploadPath)) {
            mkdirSync(this.uploadPath);
          }
        }

  getUploadPath(): string {
    return this.uploadPath;
  }
}
