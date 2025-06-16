import {
  Controller,
  Post,
  Body,
  BadRequestException,
  Res,
} from '@nestjs/common';
import { IType_contact } from 'src/interfaces/ICreate-typeContact';
import { CreateTypeContactBody } from './dto/create-typeContact';
import { Response } from 'express';

@Controller('typo-contact')
export class TypoContactController {
  constructor(private readonly typeContactRepository: IType_contact) {}

  @Post('create')
  async CreateTypeContact(
    @Body() body: { type: string },
    @Res() res: Response,
  ) {
    const { type } = body;
    if (!type) {
      res.status(404).json('O campo typeContact é obrigatório');
    }

    // const existe = await this.typeContactRepository.getTypeContactByType(type);

    // if (!existe) {
    //   res.status(404).json('Tipo de contato não encontrado');
    // }
    const result = await this.typeContactRepository.create({ type });

    return result;
  }
}
