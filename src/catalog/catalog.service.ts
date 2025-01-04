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

 async getCatalogSchema() {
      let tableName = 'TemplateMetadata';
      type columnType={column_name: string; data_type: string}
    //@ts-ignore
    const tableSchema: Array<columnType> = await this.prisma.$queryRaw`
    SELECT column_name, data_type from information_schema.columns
    where table_name = ${tableName};
  `

  //@ts-ignore
  return tableSchema.reduce(
      (columns, currentField) =>  {columns[currentField.column_name] = currentField.data_type;
        return columns;},
        {}
        );
      }


  getCatalog(): Promise<Template[]> {
    //return this.mockCatalog.getCatalog();
    return this.prisma.templateMetadata.findMany();
  }
}



//SELECT column_name, data_type FROM information_schema. columns WHERE table_name = 'TemplateMetadata';