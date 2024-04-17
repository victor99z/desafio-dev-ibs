import { IsArray, IsISO8601, IsNotEmpty, IsString } from 'class-validator';
import { AddressDto } from './address.dto';

export class UserDto {
  @IsString()
  @IsNotEmpty()
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  readonly gender: string;

  @IsISO8601()
  readonly birthdate: string;

  @IsString()
  @IsNotEmpty()
  readonly maritalStatus: string;

  @IsArray()
  readonly addresses: AddressDto[];
}
