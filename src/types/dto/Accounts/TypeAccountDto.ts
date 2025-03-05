import { TypeAccount } from "@prisma/client";


export class TypeAccountDto {
  id: number;
  name: string;     

  constructor(typeAccount: TypeAccount) {
    this.id = typeAccount.id;
    this.name = typeAccount.name ?? 'Unknown';
  }
}