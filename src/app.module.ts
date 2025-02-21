import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from './products/products.controller';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/demonestIT22C')],
  controllers: [AppController, ProductsController],
  providers: [AppService],
})
export class AppModule {}
