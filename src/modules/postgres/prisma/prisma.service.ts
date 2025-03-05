import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { PinoLogger } from 'nestjs-pino';

@Injectable()
export class PrismaService extends PrismaClient{
    
    constructor(private readonly logger:PinoLogger) {
        super();
        this.logger.setContext(PrismaService.name)
        
      }

  async testConnection(): Promise<boolean> {
    try {
      this.logger.trace('[PRISMA SERVICE] Recent request for test prisma service')
      await this.$queryRaw`SELECT 1`;
      return true;
    } catch (error) {
      console.error('Error connection to database:', error);
      return false;
    }
  }
}
