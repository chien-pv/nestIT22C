import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get('')
  public async index() {
    const users = await this.userService.getAll();
    return { message: 'Lấy dữ liệu thành công!!!', users };
  }
}
