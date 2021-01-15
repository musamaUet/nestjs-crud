import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  newFunction() : string {
    return 'Muhammad';
  }
  getHellow(): string {
    return 'Hello World!1212';
  }
  postHello(): string{
    return 'Im post method'
  }
}
