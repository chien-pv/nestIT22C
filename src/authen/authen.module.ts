import { Module } from '@nestjs/common';
import { AuthenController } from './authen.controller';
import { AuthenService } from './authen.service';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './jwtConstants.secret';

@Module({
  imports: [
    JwtModule.register({
      global: true,
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
  ],
  providers: [AuthenService],
  controllers: [AuthenController],
  exports: [AuthenService],
})
export class AuthenModule {}
