import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDto } from './dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { EntityManager, Repository } from 'typeorm';
import { Address } from './entities/address.entity';
import { UpdateAddressDto } from './dto/update-address.dto';
import { AddressDto } from './dto/address.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    @InjectRepository(Address)
    private readonly userRepository: Repository<User>,
    private readonly entityManager: EntityManager,
  ) {}

  create(createUserDto: UserDto) {
    return this.userRepository.save(createUserDto);
  }

  createAddress(id: number, createAddressDto: AddressDto) {
    createAddressDto.userId = id;
    return this.entityManager.save(Address, createAddressDto);
  }

  findAll() {
    const users = this.userRepository.find({
      relations: {
        addresses: true,
      },
    });

    return users;
  }

  findOne(id: number) {
    const user = this.userRepository.find({
      relations: {
        addresses: true,
      },
      where: { id },
    });

    return user;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update({ id }, updateUserDto);
  }

  updateAddress(id: number, updateAddressDto: UpdateAddressDto) {
    return this.entityManager.update(Address, { id }, updateAddressDto);
  }

  remove(id: number) {
    return this.userRepository.delete({ id });
  }

  removeAddress(id: number) {
    return this.entityManager.delete(Address, { id });
  }
}
