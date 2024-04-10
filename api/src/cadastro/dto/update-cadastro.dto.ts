import { PartialType } from '@nestjs/mapped-types';
import { CreateCadastroDto } from './create-cadastro.dto';

export class UpdateCadastroDto extends PartialType(CreateCadastroDto) {}
