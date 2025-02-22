import { Test, TestingModule } from '@nestjs/testing';
import { FakeClientService } from './fake-client.service';

describe('FakeClientService', () => {
  let service: FakeClientService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FakeClientService],
    }).compile();

    service = module.get<FakeClientService>(FakeClientService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
