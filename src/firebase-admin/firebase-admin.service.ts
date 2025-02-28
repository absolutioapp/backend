import { Global, Injectable } from '@nestjs/common';
import admin from 'firebase-admin';
import serviceAccount from '../config/firebase_admin_config.json';
import { PinoLogger } from 'nestjs-pino';

@Global()
@Injectable()
export class FirebaseAdminService {

    private admin: admin.app.App;

    constructor(private readonly logger:PinoLogger) {
      if (!admin.apps.length) {
        this.admin = admin.initializeApp({
          credential: admin.credential.cert(serviceAccount.firebase.service as admin.ServiceAccount),
        });
      } else {
        this.admin = admin.app();
      }
      this.logger.setContext(FirebaseAdminService.name)
    }

      getAuth() {
        this.logger.trace(`[FIREBASE ADMIN SERVICE] checking auth token`)
        return this.admin.auth();
      }

}
