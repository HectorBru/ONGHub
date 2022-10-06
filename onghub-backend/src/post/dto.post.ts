import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
} from "class-validator";

export class GetPostDto {
  @IsNotEmpty()
  title: string;
}
