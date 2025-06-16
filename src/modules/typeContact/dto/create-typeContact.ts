import { IsNotEmpty } from 'class-validator';

export class CreateTypeContactBody {
  @IsNotEmpty()
  type: string;
}
