import { Module } from '@nestjs/common';
import { PostgresController } from './postgres.controller';
import { FirebaseAdminService } from 'src/firebase-admin/firebase-admin.service';
import { FirebaseAuthGuard } from 'src/firebase-admin/firebase-auth.guard';
import { PrismaService } from './prisma/prisma.service';
import { AccountsModule } from './accounts/accounts.module';

@Module({
  controllers: [PostgresController],
  providers: [FirebaseAdminService, FirebaseAuthGuard, PrismaService],
  exports: [PrismaService],
  imports: [AccountsModule]
})
export class PostgresModule {}
