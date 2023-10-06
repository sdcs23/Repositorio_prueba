import { BadRequestException, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/user.entity'
import { Repository } from 'typeorm'
import { LoginDto } from './dto/login-auth.dto';

@Injectable()
export class AuthService {

    constructor(@InjectRepository(User) private userRepository:
        Repository<User>) { }

    async login(userObjectLogin: LoginDto) {
        const { email, password } = userObjectLogin;
        const findUser = await this.userRepository.findOne({where: {email}});
        if (!findUser) {
            throw new HttpException('usuario no se encontro',404)
        };

        const passwordEncrypt = await bcrypt.hash(password,10);
        const chechkPassword = await bcrypt.compare(password, findUser.password);
        
        if (!chechkPassword){
            throw new HttpException('password incorrect',403);
        };

        const data = findUser;
        return data;
    }

}
