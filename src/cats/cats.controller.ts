import {HttpException, UseFilters, ForbiddenException, HttpStatus, Controller, Get, Req, Post, HttpCode, Param, Body, ExceptionFilter, Catch, ArgumentsHost } from '@nestjs/common';
import {HttpExceptionFilter} from '../common/filters/http-exception.filter'
import { Request } from 'express';
import {CatsService} from './cats.service';
import { CreateCatDto } from './dto/create-cat.dto';
import { Cat } from './interfaces/cat.interface';

//Path prefix via decarator, all routes have filter
@UseFilters(new HttpExceptionFilter())
@Controller('cats')
export class CatsController {
    constructor(private catsService: CatsService) {}

  //Creates a Get request handler  Due to decator this maps to GET /cats
  @Get()
  async findAll() {
    try {
      await this.catsService.findAll()
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
   async create(@Body() createCatDto: CreateCatDto) {
       this.catsService.create(createCatDto);
       throw new ForbiddenException();
   }


@Get(':id')
findOne(@Param() params: any): string {
  console.log(params.id);
  return `This action returns a #${params.id} cat`;
}

}
