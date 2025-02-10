import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthentificationService {

    login():string {

        return "Aythentification login"
    }

    logout():string {

        return "Aythentification logout"
    }
}
