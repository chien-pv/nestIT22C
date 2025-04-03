import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Render,
  Req,
  UseGuards,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CategoryService } from 'src/category/category.service';
import { AuthGuard } from 'src/authen/auth.guard';

export interface ProductParams {
  name: string;
  description: string;
  image: string;
  price: number;
  category?: number;
}

@Controller('products')
export class ProductsController {
  constructor(
    private productService: ProductsService,
    private categoryService: CategoryService,
  ) {}

  @UseGuards(AuthGuard)
  @Get('')
  async index(@Req() req: Request) {
    console.log(req);
    const products = await this.productService.getAll();
    return { message: 'hello', data: products };
  }

  @Get('/:id')
  async detail(@Param('id') id: number) {
    const product = await this.productService.getDetail(id);
    return { message: 'Data', data: product };
  }

  @Post('/')
  async create(@Body() body: ProductParams) {
    const product = await this.productService.createProduct(body);
    return { message: 'Data', data: product };
  }
}
