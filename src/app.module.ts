import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { IClinetRepository } from './repositories/Rocket-client-repository';
import { PrismaClientRepository } from './repositories/prisma/Prisma-client';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService,
    {
      provide: IClinetRepository,
      useClass: PrismaClientRepository
    }
  ]
})
export class AppModule { }
