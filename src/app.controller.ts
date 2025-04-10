import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MailerService } from '@nestjs-modules/mailer';
import { ProductsService } from './products/products.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private mailService: MailerService,
    private productService: ProductsService,
  ) {}

  @Get()
  async getHello() {
    const product = await this.productService.getDetail(1);
    this.mailService
      .sendMail({
        to: 'chjenbk11@gmail.com', // list of receivers
        from: 'chjenbk11@gmail.com', // sender address
        subject: 'Testing Nest MailerModule ✔', // Subject line
        template: '../../src/templates/mail',
        context: {
          code: 'cf1a3f828287',
          username: product?.name,
        },
      })
      .then((data) => {
        console.log('Gửi Mail thành công!!', data);
      })
      .catch((err) => {
        console.log('Gửi Mail Không thành công!!', err);
      });
    return this.appService.getHello();
  }

  @Get('about')
  getAbout(): string {
    return 'Hello about page!!';
  }
}
