import { IsNotEmpty, Length } from "class-validator";

export class CreateClientBody {
    @IsNotEmpty()
    @Length(5, 20)
    name: string;

}