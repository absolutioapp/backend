import { Injectable } from '@nestjs/common';
import { PrismaClient, User } from '@prisma/client';
import { PinoLogger } from 'nestjs-pino';
import { CreateUserDto } from 'src/types/dto/Accounts/CreateUserDto';
import { StyleDto } from 'src/types/dto/Accounts/StyleDto';
import { TypeAccountDto } from 'src/types/dto/Accounts/TypeAccountDto';
import { UserDto } from 'src/types/dto/Accounts/UserDto';

@Injectable()
export class AccountsService extends PrismaClient {


constructor(private readonly logger:PinoLogger,) {
        super();
        this.logger.setContext(AccountsService.name)       
      }


      async getAllUsers(): Promise<UserDto[]> {
        const users = await this.user.findMany({
          include: {
            typeaccount: true,  // Подключаем объект TypeAccount
            style: true,        // Подключаем объект Style
          },
        });
      
        return users.map(user => new UserDto(user)); // ✅ Теперь ошибки не будет
      }

    async getAllTypes():Promise<TypeAccountDto[]>{
      const types = await this.typeAccount.findMany();
        return types.map(type => new TypeAccountDto(type))
    }

    async getAllStyles():Promise<TypeAccountDto[]>{
      const styles = await this.style.findMany();
        return styles.map(style => new StyleDto(style))
    }

    async create(createUserDto: CreateUserDto): Promise<UserDto> {
      const createdUser:User = await this.user.create({
        data: {
          firebaseUid: createUserDto.firebaseUid,
          username: createUserDto.username,
          firstname: createUserDto.firstname,
          lastname: createUserDto.lastname,
          email: createUserDto.email,
          typeaccountId: createUserDto.typeaccountId,
          styleId: createUserDto.styleId,
        },
      });


      return new UserDto(createdUser)
    }
}
