import { User } from "@prisma/client";


export class UserDto {
    id: number;
    firebaseUid: string;
    username: string;
    firstname: string;
    lastname: string;
    email: string;
    typeaccount: string;
    style: string;       
  
    constructor(user: any) {
      this.id = user.id;
      this.firebaseUid = user.firebaseUid;
      this.username = user.username;
      this.firstname = user.firstname;
      this.lastname = user.lastname;
      this.email = user.email;
      this.typeaccount = user.typeaccount?.name ?? 'Unknown';
      this.style = user.style?.name ?? 'Unknown';
    }
  }