import { TypeContact } from '@prisma/client';

export interface IType_contactData {
  id?: string;
  type: string;
}

export abstract class IType_contact {
  abstract create({}: IType_contactData): Promise<TypeContact>;
  abstract getAllTypeContact(): Promise<TypeContact[]>;
  abstract getTypeContactById(id: string): Promise<TypeContact | undefined>;
  abstract getTypeContactByType(type: string): Promise<TypeContact | undefined>;
  abstract update({}: IType_contactData): Promise<TypeContact>;
  abstract delete(id: string): Promise<void>;
}
