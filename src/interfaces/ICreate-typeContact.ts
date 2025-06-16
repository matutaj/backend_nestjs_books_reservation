import { TypeContact } from '@prisma/client';

export interface IType_contactData {
  id?: string;
  type: string;
}

export interface IType_contact {
  create({}: IType_contactData): Promise<TypeContact>;
  getAllTypeContact(): Promise<TypeContact[]>;
  getTypeContactById(id: string): Promise<TypeContact | undefined>;
  getTypeContactByType(type: string): Promise<TypeContact | undefined>;
  update({}: IType_contactData): Promise<TypeContact>;
  delete(id: string): Promise<void>;
}
