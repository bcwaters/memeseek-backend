import { Test, TestingModule } from '@nestjs/testing';
import { ImageRepoController } from './image-repo.controller';

describe('ImageRepoController', () => {
  let controller: ImageRepoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ImageRepoController],
    }).compile();

    controller = module.get<ImageRepoController>(ImageRepoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
