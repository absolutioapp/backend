import { Module} from '@nestjs/common';
import { ApiModule } from './modules/api/api.module';
import { PostgresModule } from './modules/postgres/postgres.module';
import { LoggerModule } from 'nestjs-pino';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UserDataRequest } from './types/auth/UserDataRequest';
import { getConfigFilePath } from './config/configuration';

@Module({
  imports: [ApiModule, PostgresModule,
    ConfigModule.forRoot({
      isGlobal: true,
      load:[getConfigFilePath]
    }),
    LoggerModule.forRootAsync({
      imports: [ConfigModule],  
      useFactory: async (configService: ConfigService) => ({
        pinoHttp: {
          level: configService.get('logger.level') || 'info',
          autoLogging: configService.get('logger.autologging') || false,
          transport: {
            target: 'pino-pretty',
            options: {
              colorize: true,
              translateTime: 'yyyy-MM-dd HH:MM:ss Z',
              ignore: 'pid,context'
            }
          },
        },
      }),
      inject: [ConfigService],  
    }),
  ],
})
export class AppModule {

}
