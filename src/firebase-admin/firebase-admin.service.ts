import { Injectable } from '@nestjs/common';
import admin from 'firebase-admin';
import serviceAccount from '../config/firebase_admin_config.json';

@Injectable()
export class FirebaseAdminService {

    private admin: admin.app.App;

    constructor() {
        this.admin = admin.initializeApp({
          credential: admin.credential.cert(serviceAccount.firebase.service as admin.ServiceAccount),
        });
      }

      getAuth() {
        return this.admin.auth();
      }

}
