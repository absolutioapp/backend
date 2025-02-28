export interface UserDataRequest {
    uid: string;
    email?: string;
    name?: string;
    [key: string]: any;
  }