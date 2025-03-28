import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Product } from './product.entity';
import { ProductsService } from './products.service';

import { ProductParams } from './products.controller';

@Resolver()
export class ProductsResolver {
  constructor(private productService: ProductsService) {}
  @Query(() => [Product])
  async getAllProducts() {
    return this.productService.getAll();
  }

  @Query(() => Product)
  async getProductsById(@Args('id') id: number) {
    return this.productService.getDetail(id);
  }

  @Mutation(() => Product)
  async createProduct(
    @Args('name') name: string,
    @Args('description') description: string,
  ) {
    const product: ProductParams = {
      name,
      description,
      image: 'dfd',
      price: 13,
      category: 1,
    };
    return this.productService.createProduct(product);
  }
}
