import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { ProductParams } from './products.controller';
import { Category } from 'src/category/category.entity';
import { CategoryService } from 'src/category/category.service';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepostory: Repository<Product>,
    private categoryService: CategoryService,
  ) {}

  getAll(): Promise<Product[]> {
    return this.productRepostory.find({
      relations: {
        category: true,
      },
    });
  }

  getDetail(id: number) {
    return this.productRepostory.findOneBy({ id });
  }

  async createProduct(params: ProductParams) {
    const category = await this.categoryService.getOneById(1);
    const productNew = new Product();
    productNew.name = params.name;
    productNew.image = params.image;
    productNew.description = params.description;
    productNew.quantity = 124;
    productNew.price = params.price;
    productNew.status = true;
    productNew.category = category;
    return this.productRepostory.save(productNew);
  }
}
