import {Inject, HttpException, UseFilters, ForbiddenException, HttpStatus, Controller, Get, Req, Post, HttpCode, Param, Body, ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import {HttpExceptionFilter} from '../common/filters/http-exception.filter'
import { Request } from 'express';
import {CatalogService} from './catalog.service';
import { CreateTemplateDto } from './dto/create-template.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

//This service returns template metadata, which can be used to resolve an image
//Path prefix via decarator, all routes have filter
@UseFilters(new HttpExceptionFilter())
@Controller('api/v1/catalog')
export class CatalogController {
    constructor( private catalogService: CatalogService) {}

  //Creates a Get request handler  Due to decator this maps to GET /catalog
  @ApiOperation({summary: 'Retrieve an array of Template.json'})
  @Get()
  async findAll() {
    try {
      console.log("calling catalogService.findAll()")
      //console.log(this.catalogService)
      return await this.catalogService.getCatalog()

    } catch (error) {
        console.log("GET catalog controller error:")
        console.log(error)
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'TODO this should be interal server error 500',
      }, HttpStatus.FORBIDDEN, {
        cause: error
      });
    }
  }


//decorator to override default 200 status code
   @Post()
   @HttpCode(204)
   @UseFilters(HttpExceptionFilter)
   async create(@Body() createTemplateDto: CreateTemplateDto) {
       this.catalogService.create(createTemplateDto);
       throw new ForbiddenException();
   }


@Get(':id')
findOne(@Param() params: any): string {
  console.log(params.id);
  return `This action returns a #${params.id} cat`;
}

}
