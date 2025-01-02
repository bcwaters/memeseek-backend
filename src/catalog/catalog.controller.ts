import {HttpException, UseFilters, ForbiddenException, HttpStatus, Controller, Get, Req, Post, HttpCode, Param, Body, ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import {HttpExceptionFilter} from '../common/filters/http-exception.filter'
import { Request } from 'express';
import {CatalogService} from './catalog.service';
import { CreateTemplateDto } from './dto/create-template.dto';
import { Template } from './interfaces/template.interface';

//Path prefix via decarator, all routes have filter
@UseFilters(new HttpExceptionFilter())
@Controller('catalog')
export class CatalogController {
    constructor(private catalogService: CatalogService) {}

  //Creates a Get request handler  Due to decator this maps to GET /catalog
  @Get()
  async findAll() {
    try {
      await this.catalogService.findAll()
    } catch (error) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'This is a custom message',
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
