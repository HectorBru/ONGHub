import {
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  IsUrl,
} from "class-validator";
import { InfluenceArea, ODS, Orientation } from "src/enums";

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
    email: string,
    profilePicture: string,
    ODS: ODS[]
  ) {
    super(name, username, password, email, profilePicture);
    this.ODS = ODS;
  }

  @IsNotEmpty()
  ODS: ODS[];
}

export class SignUpNgoDto extends SignUpDto {
  constructor(
    name: string,
    username: string,
    password: string,
    orientation: Orientation[],
    influenceArea: InfluenceArea,
    mission: string,
    webPage: string[],
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
  orientation: Orientation[];

  @IsNotEmpty()
  influenceArea: InfluenceArea;

  @IsNotEmpty()
  @IsString()
  mission: string;

  @IsNotEmpty()
  @IsString()
  webPage: string[];
}
