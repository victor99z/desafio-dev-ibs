import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CadastroModule } from './cadastro/cadastro.module';

@Module({
  imports: [CadastroModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
