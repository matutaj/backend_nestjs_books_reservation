import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { IClinetRepository } from './repositories/Rocket-client-repository';
import { PrismaClientRepository } from './repositories/prisma/Prisma-client';
import { TypoContactController } from './modules/typeContact/typeContact.controller';
import { Type_Contact_Repository } from './modules/typeContact/Type-contact-repository';
import { IType_contact } from './interfaces/ICreate-typeContact';
@Module({
  imports: [],
  controllers: [AppController, TypoContactController],
  providers: [
    PrismaService,
    {
      provide: IClinetRepository,
      useClass: PrismaClientRepository,
    },
    {
      provide: IType_contact,
      useClass: Type_Contact_Repository,
    },
  ],
})
export class AppModule {}
