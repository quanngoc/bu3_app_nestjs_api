import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Get('connect')
  connect(): Promise<string> {
    return new Promise((resolve) => resolve("Hello world"));
  }

  @Post('register')
  register(@Body() dto: AuthDto): Promise<string> {
    return this.authService.register(dto);
  }

  @Post('login')
  login(@Body() dto: AuthDto): Promise<string> {
    return this.authService.login(dto);
  }
}
