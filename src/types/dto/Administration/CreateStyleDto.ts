import { IsString, IsNotEmpty, IsInt, IsEmail, IsOptional } from 'class-validator';

export class CreateStyleDto {
  @IsString()
  @IsNotEmpty()
  name: string;

}