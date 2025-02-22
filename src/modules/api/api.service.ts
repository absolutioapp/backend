import { Injectable } from '@nestjs/common';

@Injectable()
export class ApiService {
    getHello(): string {
        return 'Welcome to the API AbsolutIO (Emovita)!';
      }
}
