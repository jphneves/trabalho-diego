import { Test, TestingModule } from '@nestjs/testing';
import { PerdiacheiService } from './perdiachei.service';

describe('PerdiacheiService', () => {
  let service: PerdiacheiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PerdiacheiService],
    }).compile();

    service = module.get<PerdiacheiService>(PerdiacheiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
