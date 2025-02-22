import { Test, TestingModule } from '@nestjs/testing';
import { FakeClientController } from './fake-client.controller';

describe('FakeClientController', () => {
  let controller: FakeClientController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FakeClientController],
    }).compile();

    controller = module.get<FakeClientController>(FakeClientController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
