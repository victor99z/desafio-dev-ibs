import { IsNotEmpty, IsNumber, IsString, isNumber } from 'class-validator';
import { Address } from '../entities/address.entity';

export class AddressDto {
  @IsString()
  @IsNotEmpty()
  street: string;

  @IsString()
  @IsNotEmpty()
  neighborhood: string;

  @IsNumber()
  number: number;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  state: string;

  @IsString()
  @IsNotEmpty()
  country: string;

  @IsString()
  @IsNotEmpty()
  postalCode: string;

  @IsString()
  @IsNotEmpty()
  moreDetails: string;

  constructor(street, neighborhood, number, city, state, country, postalCode, moreDetails){
    this.street = street;
    this.neighborhood = neighborhood;
    this.number = number;
    this.city = city;
    this.state = state;
    this.country = country;
    this.postalCode = postalCode;
    this.moreDetails = moreDetails;
  }

  static toDTO(address: Address): AddressDto {
    return new AddressDto(
      address.street, 
      address.neighborhood, 
      address.number, 
      address.city, 
      address.state, 
      address.country, 
      address.postalCode, 
      address.moreDetails
    );
  }
}
