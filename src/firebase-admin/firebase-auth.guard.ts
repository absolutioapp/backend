import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { FirebaseAdminService } from './firebase-admin.service';
import { Request } from 'express';
import { PinoLogger } from 'nestjs-pino';

@Injectable()
export class FirebaseAuthGuard implements CanActivate {
  constructor(private firebaseAdminService: FirebaseAdminService, private readonly logger:PinoLogger) {
    this.logger.setContext(FirebaseAuthGuard.name)
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    this.logger.trace(`[FIREBASE AUTH GUARD] Recent rerquest for check token`)
    const request = context.switchToHttp().getRequest<Request>();
    const token = this.extractToken(request);
    this.logger.trace(`[FIREBASE AUTH GUARD] extract token: ${token}`)
    if (!token) {
      this.logger.error(`[FIREBASE AUTH GUARD] Token not found`)
      throw new UnauthorizedException('Token not found');
    }

    try {
      const decodedToken = await this.firebaseAdminService.getAuth().verifyIdToken(token);
      request.user = decodedToken; 
      this.logger.trace(`[FIREBASE AUTH GUARD] verify token for user: ${request.user.uid} succefull`)
      return true;
    } catch (error) {
      this.logger.error(`[FIREBASE AUTH GUARD] Invalide token`)
      throw new UnauthorizedException('Invalide token');
    }
  }

  private extractToken(request: Request): string | null {
    const authHeader = request.headers.authorization;
    if (!authHeader?.startsWith('Bearer ')) {
      return null;
    }
    return authHeader.split(' ')[1];
  }
}