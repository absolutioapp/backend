import { IsString, IsNotEmpty, IsInt, IsEmail, IsOptional, IsArray, ArrayNotEmpty } from 'class-validator';

export class CreateEmotionDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  keyWords:string[]

}