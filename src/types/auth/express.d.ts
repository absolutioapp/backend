import * as express from 'express';
import { UserDataRequest } from './UserDataRequest';

declare module 'express' {
  interface Request {
    user?: any; 
  }
}