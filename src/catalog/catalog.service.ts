import { Injectable, Inject } from '@nestjs/common';
import { Template } from './interfaces/template.interface';
import {MockCatalog} from './mockDb/MockCatalog'
import { PrismaService } from 'src/prisma/prisma.service';


//LOAD TEMPLATES FROM STORAGE HERE
@Injectable()
export class CatalogService {
    //Injected catalog data
    private readonly catalog: Template[];
    private mockCatalog: MockCatalog;
    private prisma: PrismaService;

//TODO Prefer to annotate instead of direct instantiation, need class interface?
    constructor(mockCatalog: MockCatalog, private readonly prisma2: PrismaService){
        console.log("Catalog Service Instantiated, mockCatalog:");

        //print class prototype
        //console.log(Object.getOwnPropertyNames(mockCatalog['prototype']));

        this.mockCatalog = mockCatalog;
        //Compare class mockCatalog with injected mockCatalog
        //console.log(this.mockCatalog === mockCatalog)
        //this.mockCatalog = new MockCatalog();
        console.log('mockCatalogService loaded: ' + (this.mockCatalog === mockCatalog))

        //console.log(prisma2)
        this.prisma = prisma2;
        }


  create(template: Template) {
      //read all files from file system migrate to S3 later
    this.catalog.push(template);
  }

  getCatalog(): Promise<Template[]> {
    //return this.mockCatalog.getCatalog();
    return this.prisma.template.findMany();
  }
}
