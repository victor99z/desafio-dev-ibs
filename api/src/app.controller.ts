import { Controller, Get, HttpStatus, Param, Redirect, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { hostname } from 'os';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Redirect('/docs', 200)
  getHello() {
    return ;
  }
}
