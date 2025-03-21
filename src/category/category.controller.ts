import { Controller, Get } from '@nestjs/common';
import { CategoryService } from './category.service';

@Controller('category')
export class CategoryController {
  constructor(private categoryService: CategoryService) {}
  @Get('/')
  async index() {
    const category = await this.categoryService.getOneById(2);
    return {
      message: 'get',
    };
  }
}
