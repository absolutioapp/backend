import { Injectable } from '@nestjs/common';
import { FakeClient } from 'src/types/auth/FakeClient';
import serviceConfigFirebase from '../../config/firebase_app_config.json'
import * as admin from 'firebase-admin';
import axios from 'axios';
import { PinoLogger } from 'nestjs-pino';

@Injectable()
export class FakeClientService {

  constructor(private readonly logger: PinoLogger){
    this.logger.setContext(FakeClientService.name)
  }

  async getCredentials(fakeClient: FakeClient): Promise<string> {
    try {
      this.logger.trace(`[FAKE CLIENT SERVICE] Request for custom token for client with uid: ${fakeClient.uid}`)
      const customToken = await admin.auth().createCustomToken(fakeClient.uid);
      this.logger.trace(`[FAKE CLIENT SERVICE] Request for custom token for client with uid: ${fakeClient.uid} succefull`)
      const idToken = await this.exchangeCustomTokenForIdToken(customToken);
  
      return idToken;

    } catch (error) {
      this.logger.error(`[FAKE CLIENT SERVICE] Error created token: ${error.message}`)
      throw new Error(`Error created token: ${error.message}`);
    }
  }

  private async exchangeCustomTokenForIdToken(customToken: string): Promise<string> {
    try {
      this.logger.trace(`[FAKE CLIENT SERVICE] Request for change token for custom token: ${customToken}`)
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${serviceConfigFirebase.app.firebase.apiKey}`,
        { token: customToken, returnSecureToken: true }
      );
      this.logger.trace(`[FAKE CLIENT SERVICE] Request for change token succefull`)
      return response.data.idToken;
    } catch (error) {
      this.logger.error(`[FAKE CLIENT SERVICE] Error changed logger: ${error.response?.data?.error?.message || error.message}`)
      throw new Error(`Error changed logger: ${error.response?.data?.error?.message || error.message}`);
    }
  }

}
