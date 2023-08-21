import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PrismaService } from './database/prisma.service';
import { RocketTeamMember } from './repositories/Rocket-member-repository';
import { PrismarocketMemberRepository } from './repositories/prisma/Prisma-Rocket-Member-Repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [PrismaService,
    {
      provide: RocketTeamMember,
      useClass: PrismarocketMemberRepository
    }
  ]
})
export class AppModule { }
