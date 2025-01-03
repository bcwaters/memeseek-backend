import { Controller, Get, StreamableFile } from '@nestjs/common';
import { createReadStream} from 'fs'
import { join } from 'path';
import {ImageRepoService} from './image-repo.service'

@Controller('image')
export class ImageRepoController {
    constructor(private  imageRepoService: ImageRepoService){}
  //downloadImplementation, this should be a simple query param to decide CONTENT TYPE
  @Get('download')
  getFile(): StreamableFile {
    try {
        //img 1735880863799.png
        let fileNameParam = '1735880863799.png'
      console.log("calling ImageRepoService.get('Image')")
      //console.log(this.catalogService)
      //return await this.catalogService.getCatalog()
    //return this.imageRepoService.getUploadPath();
          const file = createReadStream(join(this.imageRepoService.getUploadPath() + fileNameParam));
          return new StreamableFile(file)
    } catch (error) {
        console.log("GET catalog controller error:")
        console.log(error)
    }
  }

/**
 * @swagger
 * /image:
 *   get:
 *     description: Returns an image based on filename
 *     responses:
 *       200:
 *         description: IMG.png
 */
  @Get()
  getImage(): StreamableFile {
    try {

      //img 1735880863799.png
      let fileNameParam = '1735880863799.png'
      console.log("calling ImageRepoService.get('Image')")
      //console.log(this.catalogService)
      //return await this.catalogService.getCatalog()
    //return this.imageRepoService.getUploadPath();
          const file = createReadStream(join(this.imageRepoService.getUploadPath() + fileNameParam));
          return new StreamableFile(file,
              {
                    type: 'image/png',
                    disposition: 'inline',
                    // If you want to define the Content-Length value to another value instead of file's length:
                    // length: 123,
                  });
    } catch (error) {
        console.log("GET catalog controller error:")
        console.log(error)
    }
  }
    }
