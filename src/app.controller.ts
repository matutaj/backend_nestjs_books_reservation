import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateClientBody } from './dtos/create-client';
import { IClinetRepository } from './repositories/Rocket-client-repository';
import { Response } from 'express';

@Controller('app')
export class AppController {
  constructor(private clientRepository: IClinetRepository) {}

  @Post('client')
  async Createclient(@Body() body: CreateClientBody, res: Response) {
    const { name, contact } = body;

    const ExistName = await this.clientRepository.getByName(name);
    if (ExistName) throw new Error('Already Exist This Name!');

    const createUse = await this.clientRepository.create(name);

    return res.status(200).json(createUse);
  }

  @Get('client')
  async GetClient(res: Response) {
    const getUser = await this.clientRepository.getClient();

    return res.status(200).json(getUser);
  }
}
