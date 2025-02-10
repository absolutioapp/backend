import { Controller, Get, Post } from '@nestjs/common';
import { AuthentificationService } from './authentification.service';

@Controller('authentification')
export class AuthentificationController {
    constructor(private readonly auythentificationsSerice: AuthentificationService) {}
    
      @Post('login')
      login(): string {
        return this.auythentificationsSerice.login();
      }

      @Get('logout')
      logout(): string {
        return this.auythentificationsSerice.logout();
      }
}
