// import { UserDataRequest } from './UserDataRequest';

// declare global {
//   namespace Express {
//     interface Request {
//       user?: UserDataRequest;  // Указываем тип для user
//     }
//   }
// }

import { UserDataRequest } from './UserDataRequest';
import * as express from 'express';

declare module 'express' {
    interface Request {
      user?: UserDataRequest;  // Указываем тип для user
    }
}