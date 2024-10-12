import { IsOptional, IsString, MinLength } from 'class-validator';

export class CreateDriverDto {
  @IsString()
  @MinLength(2, { message: "Driver's name must be at least 2 letters long" })
  name: string;

  @IsString()
  @MinLength(2, { message: "Driver's name must be at least 2 letters long" })
  license: string;

  @IsOptional()
  @IsString()
  additionalInfo?: string;
}
