import { Module } from '@nestjs/common';
import { CadastroService } from './cadastro.service';
import { CadastroController } from './cadastro.controller';

@Module({
  controllers: [CadastroController],
  providers: [CadastroService],
})
export class CadastroModule {}
