import { Module } from '@nestjs/common';
import { AdministrationController } from './administration.controller';
import { AdministrationService } from './administration.service';
import { FirebaseAuthGuard } from 'src/firebase-admin/firebase-auth.guard';
import { FirebaseAdminService } from 'src/firebase-admin/firebase-admin.service';

@Module({
  controllers: [AdministrationController],
  providers: [FirebaseAdminService, FirebaseAuthGuard,AdministrationService]
})
export class AdministrationModule {}
