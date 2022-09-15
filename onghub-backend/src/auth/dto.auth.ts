import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
} from "class-validator";
import { ODS } from "src/enums";

export class SignInDto {
  constructor(usernameOrEmail: string, password: string) {
    this.usernameOrEmail = usernameOrEmail;
    this.password = password;
  }

  @IsNotEmpty()
  usernameOrEmail: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}

export class SignUpDto {
  constructor(
    username: string,
    password: string,
    email: string,
    profilePicture: string,
    fullName: string
  ) {
    this.username = username;
    this.password = password;
    this.email = email;
    this.profilePicture = profilePicture;
    this.fullName = fullName;
  }

  @IsNotEmpty()
  username: string;

  @IsString()
  @IsNotEmpty()
  password: string;

  @IsString()
  @IsEmail()
  @IsOptional()
  email: string;

  @IsUrl()
  profilePicture: string;

  @IsNotEmpty()
  @IsString()
  fullName: string;
}

export class SignUpRegisteredUserDto extends SignUpDto {
  constructor(
    username: string,
    password: string,
    email: string,
    profilePicture: string,
    fullName: string,
    ODS: ODS[]
  ) {
    super(username, password, email, profilePicture, fullName);
    ODS = ODS;
  }

  @IsNotEmpty()
  ODS: ODS[];
}
