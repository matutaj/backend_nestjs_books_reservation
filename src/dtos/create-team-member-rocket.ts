import { IsNotEmpty, Length } from "class-validator";

export class CreateTeamMemberBody {
    @IsNotEmpty()
    @Length(5, 20)
    name: string;


    @IsNotEmpty()
    function: string
}