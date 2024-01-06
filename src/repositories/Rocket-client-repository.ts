import { Client } from '@prisma/client';

export abstract class IClinetRepository {
  abstract create(name: string): Promise<Client>;
  abstract getClient(): Promise<Client[]>;
  abstract getByName(name: string): Promise<Client | undefined>;
}
