import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login-auth.dto';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    @Post('login')
    async loginUser(@Body() userObjectLogin: LoginDto) {
        // console.log(userObjectLogin);
        // const data = await this.authService.login(userObjectLogin);
        return this.authService.login(userObjectLogin);

    }
    // @Post('login')
    // public async saveEmailTokens() {
    //     return {
    //         "hello": "hello world"
    //     }
    // }

}
