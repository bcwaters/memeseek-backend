import { Injectable } from '@nestjs/common';
import { Template } from './interfaces/template.interface';

//LOAD TEMPLATES FROM STORAGE HERE
@Injectable()
export class CatalogService {
  private readonly catalog: Template[] = [];

  create(template: Template) {
    this.catalog.push(template);
  }

  findAll(): Template[] {
    return this.catalog;
  }
}
