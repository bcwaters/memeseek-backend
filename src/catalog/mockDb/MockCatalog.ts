import { Injectable } from '@nestjs/common';
import { Template } from 'src/catalog/interfaces/template.interface';

//Represents the storage for meme template images
@Injectable()
export class MockCatalog {
  contructor() {
    console.log('MockCatalog Instantiated catalog:');
    //console.log(this)
  }
  private catalog: Template[] = [
    {
      id: 'expandingbrainoriginal',
      name: 'expandingbrain',
      location: '/templates/expandingbrain/expandingBrain.jpg',
    },
    {
      id: 'twobuttonsoriginal',
      name: 'two buttons',
      location: '/templates/twobuttons/twoButtons.jpg',
    },
    {
      id: 'yeschadoriginal',
      name: 'yes chad',
      location: '/templates/yeschad/yesChad.webp',
    },
  ];

  public getCatalog() {
    console.log('MockCatalog.getCatalog() called');
    return this.catalog;
  }
}
