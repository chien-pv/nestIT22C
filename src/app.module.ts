import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsController } from './products/products.controller';
import { UsersModule } from './users/users.module';
import { Product } from './products/product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { Category } from './category/category.entity';
import { CategoryModule } from './category/category.module';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { join } from 'path';
import { AuthenController } from './authen/authen.controller';
import { AuthenService } from './authen/authen.service';
import { AuthenModule } from './authen/authen.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { EjsAdapter } from '@nestjs-modules/mailer/dist/adapters/ejs.adapter';
import { MailerService } from '@nestjs-modules/mailer';
import { ProductsService } from './products/products.service';
import { ScheduleModule } from '@nestjs/schedule';
import { ScheduleService } from './schedule/schedule.service';
import { ChatAppGateway } from './chat-app/chat-app.gateway';


@Module({
  imports: [
    ScheduleModule.forRoot(),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
          user: 'chjenbk11@gmail.com',
          pass: 'gtsvnkxtylvviasr',
        },
      },
      defaults: {
        from: '"Your App" <your-email@gmail.com>',
      },
      template: {
        dir: join(__dirname, 'templates'), // Thư mục chứa file .ejs
        adapter: new EjsAdapter(), // Adapter cho EJS
        options: {
          strict: false,
        },
      },
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'demost22c',
      entities: [Product, Category],
      synchronize: true,
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    CategoryModule,
    ProductsModule,
    AuthenModule,
  ],
  controllers: [AppController],
  providers: [AppService, ScheduleService, ChatAppGateway],
})
export class AppModule {}
