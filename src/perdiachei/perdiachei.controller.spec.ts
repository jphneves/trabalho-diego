import { Test, TestingModule } from '@nestjs/testing';
import { PerdiacheiController } from './perdiachei.controller';
import { PerdiacheiService } from './perdiachei.service';

describe('PerdiacheiController', () => {
  let controller: PerdiacheiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PerdiacheiController],
      providers: [PerdiacheiService],
    }).compile();

    controller = module.get<PerdiacheiController>(PerdiacheiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
