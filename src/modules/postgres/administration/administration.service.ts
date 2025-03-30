import { Injectable } from '@nestjs/common';
import { PrismaClient, TypeAccount } from '@prisma/client';
import { PinoLogger } from 'nestjs-pino';
import { EmotionDto } from 'src/types/dto/Accounts/EmotionDto';
import { StyleDto } from 'src/types/dto/Accounts/StyleDto';
import { TypeAccountDto } from 'src/types/dto/Accounts/TypeAccountDto';
import { CreateEmotionDto } from 'src/types/dto/Administration/CreateEmotionDto';
import { CreateStyleDto } from 'src/types/dto/Administration/CreateStyleDto';
import { CreateTypeAccountDto } from 'src/types/dto/Administration/CreateTypeAccountDto';

@Injectable()
export class AdministrationService extends PrismaClient{


    constructor(private readonly logger:PinoLogger) {
            super();
            this.logger.setContext(AdministrationService.name)       
          }

         async getAllTypes():Promise<TypeAccountDto[]>{
           const types = await this.typeAccount.findMany();
             return types.map(type => new TypeAccountDto(type))
         }
     
         async getAllStyles():Promise<TypeAccountDto[]>{
           const styles = await this.style.findMany();
             return styles.map(style => new StyleDto(style))
         } 

         async getAllEmotion():Promise<EmotionDto[]>{
            const emotions = await this.emotion.findMany();
              return emotions.map(emotion => new EmotionDto(emotion))
          } 
         
         async createTypeAccount(typeAccount: CreateTypeAccountDto): Promise<TypeAccountDto> {
                  const createdType:TypeAccount = await this.typeAccount.create({
                    data: {
                      name:typeAccount.name
                    },
                  });
                  return new TypeAccountDto(createdType)
        }

        async createStyle(style: CreateStyleDto): Promise<StyleDto> {
            const createdStyle:TypeAccount = await this.style.create({
                data: {
                  name:style.name
                },
              });
              return new TypeAccountDto(createdStyle)
        }

        async createEmotion(emotion: CreateEmotionDto): Promise<EmotionDto> {
            const createdEmotion:EmotionDto = await this.emotion.create({
                data: {
                  name:emotion.name,
                  keyWords:emotion.keyWords
                },
              });
              return new EmotionDto(createdEmotion)
        }
}
