import { Query, Resolver } from '@nestjs/graphql';
import { Product } from './product.entity';
import { ProductsService } from './products.service';

@Resolver()
export class ProductsResolver {
  constructor(private productService: ProductsService) {}
  @Query(() => [Product])
  async getAllProducts() {
    return this.productService.getAll();
  }
}
