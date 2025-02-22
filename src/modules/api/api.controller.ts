import { Controller, Get, UseGuards } from '@nestjs/common';
import { ApiService } from './api.service';
import { FirebaseAuthGuard } from 'src/firebase-admin/firebase-auth.guard';

@Controller('api')
export class ApiController {

    constructor(private readonly apiService: ApiService) {}

    @Get()
    @UseGuards(FirebaseAuthGuard)
    getHello(): string {
      return this.apiService.getHello();
    }
}
