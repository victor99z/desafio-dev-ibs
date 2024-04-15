import {
  IsArray,
  IsDate,
  IsISO8601,
  IsNotEmpty,
  IsString,
} from 'class-validator';
import { Address } from '../entities/address.entity';
import { User } from '../entities/user.entity';
import { Exclude } from 'class-transformer';

export class UserDto {
  readonly id: number;

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
  readonly addresses: Address[];

  constructor(name, gender, birthdate, maritalStatus, addresses) {
    this.name = name;
    this.gender = gender;
    this.birthdate = birthdate;
    this.maritalStatus = maritalStatus;
    this.addresses = addresses;
  }

  static toDTO(user: User): UserDto {
    return new UserDto(
      user.name,
      user.gender,
      user.birthdate,
      user.maritalStatus,
      user.addresses,
    );
  }
}
