import { Body, Controller, Get, Post } from '@nestjs/common';
import { PrismaService } from './database/prisma.service';
import { CreateTeamMemberBody } from './dtos/create-team-member-rocket';
import { RocketTeamMember } from './repositories/Rocket-member-repository';
@Controller("app")
export class AppController {
  constructor(
    private rocketMemberRepository: RocketTeamMember
  ) { }

  @Post("member")
  async CreateMember(@Body() body: CreateTeamMemberBody) {
    const { name, function: memberFunction } = body
    await this.rocketMemberRepository.create(name, memberFunction)

  }



}
