import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

export class CreateAccountBody {
  @IsNotEmpty()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
