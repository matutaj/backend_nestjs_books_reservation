import { Injectable } from '@nestjs/common';
import { TypeContact } from '@prisma/client';
import { PrismaService } from 'src/database/prisma.service';
import {
  IType_contact,
  IType_contactData,
} from 'src/interfaces/ICreate-typeContact';

Injectable();
export class Type_Contact_Repository implements IType_contact {
  constructor(private prisma: PrismaService) {}
  async create({ type }: IType_contactData): Promise<TypeContact> {
    const create = await this.prisma.typeContact.create({ data: { type } });
    return create;
  }
  async getAllTypeContact(): Promise<TypeContact[]> {
    const getAll = await this.prisma.typeContact.findMany();
    return getAll;
  }
  async getTypeContactById(id: string): Promise<TypeContact | undefined> {
    const getTypeById =
      (await this.prisma.typeContact.findFirst({ where: { id } })) || undefined;

    return getTypeById;
  }
  async getTypeContactByType(type: string): Promise<TypeContact | undefined> {
    const getByTpe =
      (await this.prisma.typeContact.findFirst({ where: { type } })) ||
      undefined;

    return getByTpe;
  }
  async update({ id, type }: IType_contactData): Promise<TypeContact> {
    const update = await this.prisma.typeContact.update({
      where: { id },
      data: {
        type,
      },
    });
    return update;
  }
  async delete(id: string): Promise<void> {
    await this.prisma.typeContact.delete({ where: { id } });
  }
}
