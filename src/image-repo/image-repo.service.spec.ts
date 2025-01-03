import { Test, TestingModule } from '@nestjs/testing';
import { ImageRepoService } from './image-repo.service';

describe('ImageRepoService', () => {
  let service: ImageRepoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ImageRepoService],
    }).compile();

    service = module.get<ImageRepoService>(ImageRepoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
