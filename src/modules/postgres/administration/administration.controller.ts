import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { FirebaseAuthGuard } from 'src/firebase-admin/firebase-auth.guard';
import { TypeAccountDto } from 'src/types/dto/Accounts/TypeAccountDto';
import { AdministrationService } from './administration.service';
import { PinoLogger } from 'nestjs-pino';
import { StyleDto } from 'src/types/dto/Accounts/StyleDto';
import { CreateStyleDto } from 'src/types/dto/Administration/CreateStyleDto';
import { CreateTypeAccountDto } from 'src/types/dto/Administration/CreateTypeAccountDto';

@Controller('administration')
@UseGuards(FirebaseAuthGuard)
export class AdministrationController {

        constructor(private readonly administrationService: AdministrationService, private readonly logger: PinoLogger){
            this.logger.setContext(AdministrationService.name)
            }
    

        @Get("/types-account")
        async getTypeAccounts(): Promise<TypeAccountDto[]> {
                this.logger.info('[ADMINISTRATION CONTROLLER] Recent request for getting all types account')
                return await this.administrationService.getAllTypes();
        }

        @Get("/styles")
            async getStyles(): Promise<StyleDto[]> {
                this.logger.info('[ADMINISTRATION CONTROLLER] Recent request for getting all styles')
                return await this.administrationService.getAllStyles();
        }

        @Post("/create-style")
            async createStyle(@Body() style:CreateStyleDto): Promise<StyleDto> {
                    this.logger.info(`[ADMINISTRATION CONTROLLER] Recent request for creating new style - ${style.name}`)
                    return await this.administrationService.createStyle(style);
        }

        @Post("/create-type")
            async createType(@Body() typeAccount:CreateTypeAccountDto): Promise<TypeAccountDto> {
                this.logger.info(`[ADMINISTRATION CONTROLLER] Recent request for creating typeAccount - ${typeAccount}`)
                return await this.administrationService.createTypeAccount(typeAccount);
    }
}
