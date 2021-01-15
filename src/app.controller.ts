import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    // const new_function = this.appService.newFunction();
    return this.appService.getHellow();
  }
  @Get('/new')
  getNew(): string {
    return this.appService.newFunction();
  }
  @Post()
  postHello(): string {
    return this.appService.postHello();
  }
}
