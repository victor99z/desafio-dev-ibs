import { Injectable } from '@nestjs/common';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserDto } from './dto/user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
    //private readonly entityManager: EntityManager,
  ) {}

  create(createUserDto: UserDto) {
  
    return this.userRepository.save(createUserDto);
  }

  async findAll() {
    const users = await this.userRepository.find({
      relations: {
        addresses: true,
      },
    });

    const dtos = users.map((user) => UserDto.toDTO(user));

    return dtos;
  }

  async findOne(id: number) {

    const user = await this.userRepository.findBy({ id })
    const userDTO = user.map((user) => UserDto.toDTO(user));

    return userDTO;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return this.userRepository.update({ id }, updateUserDto);
  }

  remove(id: number) {
    return this.userRepository.delete({ id });
  }
}
