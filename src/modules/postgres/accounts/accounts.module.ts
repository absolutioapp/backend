import { Module } from '@nestjs/common';
import { AccountsController } from './accounts.controller';
import { AccountsService } from './accounts.service';
import { FirebaseAuthGuard } from 'src/firebase-admin/firebase-auth.guard';
import { FirebaseAdminService } from 'src/firebase-admin/firebase-admin.service';

@Module({
  controllers: [AccountsController],
  providers: [FirebaseAdminService, FirebaseAuthGuard, AccountsService],
})
export class AccountsModule {}
