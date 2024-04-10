import { Injectable } from '@nestjs/common';
import { CreateCadastroDto } from './dto/create-cadastro.dto';
import { UpdateCadastroDto } from './dto/update-cadastro.dto';

@Injectable()
export class CadastroService {
  create(createCadastroDto: CreateCadastroDto) {
    return 'This action adds a new cadastro';
  }

  findAll() {
    return `This action returns all cadastro`;
  }

  findOne(id: number) {
    return `This action returns a #${id} cadastro`;
  }

  update(id: number, updateCadastroDto: UpdateCadastroDto) {
    return `This action updates a #${id} cadastro`;
  }

  remove(id: number) {
    return `This action removes a #${id} cadastro`;
  }
}
