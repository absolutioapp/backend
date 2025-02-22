import { Module } from '@nestjs/common';
import { FakeClientController } from './fake-client.controller';
import { FakeClientService } from './fake-client.service';

@Module({
  controllers: [FakeClientController],
  providers: [FakeClientService]
})
export class FakeClientModule {}
