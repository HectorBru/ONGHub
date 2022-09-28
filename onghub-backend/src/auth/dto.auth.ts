import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
} from "class-validator";
import { InfluenceArea, Orientation } from "src/enums";

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

export abstract class SignUpDto {
  constructor(
    name: string,
    username: string,
    password: string,
    email?: string,
    profilePicture?: string
  ) {
    this.name = name;
    this.username = username;
    this.password = password;
    this.email = email;
    this.profilePicture = profilePicture;
  }

  @IsNotEmpty()
  @IsString()
  name: string;

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
  @IsOptional()
  profilePicture: string;
}

export class SignUpRegisteredUserDto extends SignUpDto {
  constructor(
    name: string,
    username: string,
    password: string,
    ODS: String[],
    email?: string,
    profilePicture?: string
  ) {
    super(name, username, password, email, profilePicture);
    this.ODS = ODS;
  }

  @IsNotEmpty()
  ODS: String[];
}

export class SignUpNgoDto extends SignUpDto {
  constructor(
    name: string,
    username: string,
    password: string,
    orientation: String[],
    influenceArea: string,
    mission: string,
    webPage: string,
    email?: string,
    profilePicture?: string
  ) {
    super(name, username, password, email, profilePicture);
    this.orientation = orientation;
    this.influenceArea = influenceArea;
    this.mission = mission;
    this.webPage = webPage;
  }

  @IsNotEmpty()
  orientation: String[];

  @IsNotEmpty()
  influenceArea: string;

  @IsNotEmpty()
  @IsString()
  mission: string;

  @IsNotEmpty()
  @IsString()
  @IsUrl()
  webPage: string;
}
