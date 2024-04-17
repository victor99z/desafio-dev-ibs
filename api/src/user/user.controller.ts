import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  NotFoundException,
  ClassSerializerInterceptor,
  UseInterceptors,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserDto } from './dto/user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UpdateAddressDto } from './dto/update-address.dto';
import { AddressDto } from './dto/address.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { ThrottlerGuard } from '@nestjs/throttler';

@Controller('user')
@UseInterceptors(ClassSerializerInterceptor)
@UseGuards(AuthGuard, ThrottlerGuard)
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  @HttpCode(201)
  async create(@Body() createUserDto: UserDto) {
    const res = await this.userService.create(createUserDto);
    return { user_id: res.id };
  }

  @Post(':id/address')
  @HttpCode(201)
  async createAddress(
    @Param('id') id: string,
    @Body() createAddress: AddressDto,
  ) {
    const res = await this.userService.createAddress(+id, createAddress);
    return { user_id: res.userId, address_id: res.id };
  }

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const result = await this.userService.findOne(+id);

    if (result.length == 0) {
      throw new NotFoundException('User not found');
    }

    return result;
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    const res = await this.userService.update(+id, updateUserDto);
    if (res.affected == 0) {
      throw new NotFoundException('User not found');
    }
    return;
  }

  @Patch('/address/:id')
  updateAddress(
    @Param('id') id: string,
    @Body() updateAddressDto: UpdateAddressDto,
  ) {
    return this.userService.updateAddress(+id, updateAddressDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const afftedRows = await this.userService.remove(+id);

    if (afftedRows.affected == 0) {
      throw new NotFoundException('User not found');
    }

    return;
  }

  @Delete('/address/:id')
  async removeAddress(@Param('id') id: string) {
    const afftedRows = await this.userService.removeAddress(+id);

    if (afftedRows.affected == 0) {
      throw new NotFoundException('User not found');
    }

    return;
  }
}
