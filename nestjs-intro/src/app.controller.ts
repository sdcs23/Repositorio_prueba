import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';
import { AppService } from './app.service';
import * as fs from 'fs';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  /*@Get()
  getHello(): string {
    return this.appService.getHello();
  }*/
  @Get()
  getHomePage(@Res() res: Response) {
    // Lee el contenido del archivo "index.html" y envíalo como respuesta
    const indexHtml = fs.readFileSync('public/index.html', 'utf8'); // Reemplaza 'ruta/a/tu/index.html' con la ubicación real de tu archivo "index.html"
    res.send(indexHtml);
  }
  
}
