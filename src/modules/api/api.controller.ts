import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiService } from './api.service';
import { FirebaseAuthGuard } from 'src/firebase-admin/firebase-auth.guard';
import { PinoLogger } from 'nestjs-pino';

@Controller('api')
export class ApiController {

    constructor(private readonly apiService: ApiService,private readonly logger: PinoLogger) {
      this.logger.setContext(ApiController.name)
    }

    @Get()
    @UseGuards(FirebaseAuthGuard)
    getHello(): string {
      this.logger.trace('[API CONTROLLER] Recent request for test controller api (getHello)')
      return this.apiService.getHello();
    }
}
