import { Client } from "@prisma/client";

export abstract class IClinetRepository {
    abstract create(name: string): Promise<Client>
}