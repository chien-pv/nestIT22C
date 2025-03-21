import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(Category)
    private readonly categoriRepostory: Repository<Category>,
  ) {}

  getAll() {
    return this.categoriRepostory.find();
  }

  getOneById(id: number) {
    return this.categoriRepostory.findOne({
      where: { id },
    });
  }
}
