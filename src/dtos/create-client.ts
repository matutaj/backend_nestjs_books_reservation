import { IsNotEmpty, Length } from "class-validator";

interface IcreateContact {
    contact: string
    clientId: string
    typeContact: string
}

export class CreateClientBody {
    @IsNotEmpty()
    @Length(5, 20)
    name: string;
    contact: IcreateContact[]
}