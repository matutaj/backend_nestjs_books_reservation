import { PrismaService } from 'src/database/prisma.service';
import { IClinetRepository } from '../Rocket-client-repository';
import { Injectable } from '@nestjs/common';
import { Client } from '@prisma/client';

@Injectable()
export class PrismaClientRepository implements IClinetRepository {
  constructor(private prisma: PrismaService) {}
  async create(name: string): Promise<Client> {
    const createClient = await this.prisma.client.create({
      data: {
        name,
      },
    });
    return createClient;
  }

  async getClient(): Promise<Client[]> {
    const getAllclient = (await this.prisma.client.findMany({})) || undefined;

    return getAllclient;
  }

  async getByName(name: string): Promise<Client> {
    const getByUserName =
      (await this.prisma.client.findFirst({ where: { name } })) || undefined;

    return getByUserName;
  }
}
