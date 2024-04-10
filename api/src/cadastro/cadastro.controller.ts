import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CadastroService } from './cadastro.service';
import { CreateCadastroDto } from './dto/create-cadastro.dto';
import { UpdateCadastroDto } from './dto/update-cadastro.dto';

@Controller('cadastro')
export class CadastroController {
  constructor(private readonly cadastroService: CadastroService) {}

  @Post()
  create(@Body() createCadastroDto: CreateCadastroDto) {
    return this.cadastroService.create(createCadastroDto);
  }

  @Get()
  findAll() {
    return this.cadastroService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cadastroService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCadastroDto: UpdateCadastroDto,
  ) {
    return this.cadastroService.update(+id, updateCadastroDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cadastroService.remove(+id);
  }
}
