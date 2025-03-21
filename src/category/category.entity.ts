import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Product } from '../products/product.entity';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Category {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  description: string;

  // @OneToMany(() => Product, (product) => product.category)
  // products: Product[];
}
