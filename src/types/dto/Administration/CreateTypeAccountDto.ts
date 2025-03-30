import { IsString, IsNotEmpty, IsInt, IsEmail, IsOptional } from 'class-validator';

export class CreateTypeAccountDto {
  @IsString()
  @IsNotEmpty()
  name: string;

}