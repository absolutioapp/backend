import { Injectable } from '@nestjs/common';
import { PinoLogger } from 'nestjs-pino';

@Injectable()
export class ApiService {
  constructor(private readonly logger: PinoLogger){
    this.logger.setContext(ApiService.name)
  }
    getHello(): string {
        this.logger.trace(`Test for api service succefull`)
        return 'Welcome to the API AbsolutIO (Emovita)!';
      }
}
