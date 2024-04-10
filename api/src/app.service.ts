import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
  postHello(): string {
    return JSON.stringify({ message: 'Hello World!' });
  }
}