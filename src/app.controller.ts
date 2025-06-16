import { Body, Controller, Get, Post, Res } from '@nestjs/common';
import { CreateClientBody } from './dtos/create-client';
import { IClinetRepository } from './repositories/Rocket-client-repository';
import { Response } from 'express';

@Controller('app')
export class AppController {
  constructor(private clientRepository: IClinetRepository) {}

  @Post('client')
  async Createclient(@Body() body: CreateClientBody, @Res() res: Response) {
    const { name, contact } = body;

    const ExistName = await this.clientRepository.getByName(name);
    if (ExistName) res.status(404).json('Already Exist This Name!');

    const createUse = await this.clientRepository.create(name);

    return createUse;
  }

  @Get('client')
  async GetClient() {
    const getUser = await this.clientRepository.getClient();

    return getUser;
  }
}
