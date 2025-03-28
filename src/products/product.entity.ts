import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Category } from '../category/category.entity';
import { Int, ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
@Entity()
export class Product {
  @Field((type) => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  name: string;

  @Field()
  @Column()
  description: string;

  @Field()
  @Column()
  image: string;

  @Field()
  @Column()
  price: number;

  @Field()
  @Column()
  quantity: number;

  @Field()
  @Column()
  status: boolean;

  @Field(() => Category)
  @ManyToOne(() => Category, (category) => category.products)
  category?: Category | null;
}
