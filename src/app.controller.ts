import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateClientBody } from './dtos/create-client';
import { IClinetRepository } from './repositories/Rocket-client-repository';
@Controller("app")
export class AppController {
  constructor(
    private clientRepository: IClinetRepository
  ) { }

  @Post("client")
  async Createclient(@Body() body: CreateClientBody) {
    const { name, contact } = body
    await this.clientRepository.create(name)

  }



}
