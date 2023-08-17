import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { randomUUID } from "node:crypto"
import { CreateTeamMemberBody } from './dtos/create-team-member-rocket';
@Controller("app")
export class AppController {
  constructor(
    private prisma: PrismaService
  ) { }

  @Get("member")
  async CreateMember(@Body() body: CreateTeamMemberBody) {
    const { name, function: memberFunction } = body
    const member = await this.prisma.rocketTeamMember.create({
      data: {
        id: randomUUID(),
        name,
        function: memberFunction
      }
    })
    return member;
  }
}
