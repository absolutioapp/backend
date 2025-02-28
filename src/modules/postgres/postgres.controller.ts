import { Controller, Get, UseGuards } from '@nestjs/common';
import { FirebaseAuthGuard } from 'src/firebase-admin/firebase-auth.guard';
import { PrismaService } from './prisma/prisma.service';
import { PinoLogger } from 'nestjs-pino';

@Controller('postgres')
@UseGuards(FirebaseAuthGuard)
export class PostgresController {
    constructor(private readonly prismaService: PrismaService, private readonly logger: PinoLogger){
        this.logger.setContext(PostgresController.name)
        }

    @Get()
    getTestConnnection(): any {
            this.logger.trace('[POSTGRES CONTROLLER] Recent request for test postgres controller')
            return this.prismaService.testConnection();
    }
}
