import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Render,
  Req,
} from '@nestjs/common';
import { Request } from 'express';

@Controller('products')
export class ProductsController {
  @Get('new/:id')
  @Render('index')
  getProduct(@Param('id') id: string, @Query('q') q: string) {
    console.log(id);
    console.log(q);
    return { message: 'hello', data: [] };
  }

  @Post('/create')
  postProduct(@Body() body) {
    console.log(body);
    return 'Tao moi du lieu thanh cong!';
  }
}
