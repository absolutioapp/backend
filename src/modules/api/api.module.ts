import { Module } from '@nestjs/common';
import { ApiController } from './api.controller';
import { FakeClientController } from '../fake-client/fake-client.controller';
import { FirebaseAdminService } from 'src/firebase-admin/firebase-admin.service';
import { FirebaseAuthGuard } from 'src/firebase-admin/firebase-auth.guard';
import { ApiService } from './api.service';
import { FakeClientService } from '../fake-client/fake-client.service';


@Module({
  controllers: [ApiController,FakeClientController],
  providers: [ApiService, FirebaseAdminService, FirebaseAuthGuard, FakeClientService]
})

export class ApiModule {

}