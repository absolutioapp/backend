import { Injectable } from '@nestjs/common';
import { FakeClient } from 'src/types/auth/FakeClient';
import serviceConfigFirebase from '../../config/firebase_app_config.json'
import * as admin from 'firebase-admin';
import axios from 'axios';

@Injectable()
export class FakeClientService {

  async getCredentials(fakeClient: FakeClient): Promise<string> {
    try {
      const customToken = await admin.auth().createCustomToken(fakeClient.uid);

      const idToken = await this.exchangeCustomTokenForIdToken(customToken);
      
      return idToken;

    } catch (error) {
      throw new Error(`Error created token: ${error.message}`);
    }
  }

  private async exchangeCustomTokenForIdToken(customToken: string): Promise<string> {
    try {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithCustomToken?key=${serviceConfigFirebase.app.firebase.apiKey}`,
        { token: customToken, returnSecureToken: true }
      );
      return response.data.idToken;
    } catch (error) {
      throw new Error(`Ошибка обмена токена: ${error.response?.data?.error?.message || error.message}`);
    }
  }

}
