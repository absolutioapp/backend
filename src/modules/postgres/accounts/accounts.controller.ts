import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { FirebaseAuthGuard } from 'src/firebase-admin/firebase-auth.guard';
import { PrismaService } from '../prisma/prisma.service';
import { PinoLogger } from 'nestjs-pino';
import { AccountsService } from './accounts.service';
import { UserDto } from 'src/types/dto/Accounts/UserDto';
import { TypeAccountDto } from 'src/types/dto/Accounts/TypeAccountDto';
import { StyleDto } from 'src/types/dto/Accounts/StyleDto';
import { CreateUserDto } from 'src/types/dto/Accounts/CreateUserDto';

@Controller('accounts')
@UseGuards(FirebaseAuthGuard)
export class AccountsController {


    constructor(private readonly accountsService: AccountsService, private readonly logger: PinoLogger){
        this.logger.setContext(AccountsController.name)
        }


    
    @Get("/users")
    async getUsers(): Promise<UserDto[]> {
            this.logger.info('[ACCOUNTS CONTROLLER] Recent request for getting all users')
            return await this.accountsService.getAllUsers();
    }

        
    @Get("/type-accounts")
    async getTypeAccounts(): Promise<TypeAccountDto[]> {
            this.logger.info('[ACCOUNTS CONTROLLER] Recent request for getting all type accounts')
            return await this.accountsService.getAllTypes();
    }

        
    @Get("/styles")
    async getStyles(): Promise<StyleDto[]> {
            this.logger.info('[ACCOUNTS CONTROLLER] Recent request for getting all styles')
            return await this.accountsService.getAllStyles();
    }

    @Post("/create")
    async createAccount(@Body() user:CreateUserDto): Promise<UserDto> {
            this.logger.info(`[ACCOUNTS CONTROLLER] Recent request for creating user with firebase id - ${user.firebaseUid}`)
            return await this.accountsService.create(user);
    }
}
