import { Injectable } from '@angular/core';
// @ts-ignore
import jwt_decode from 'jwt-decode';
import { TokenPayLoad } from './token-payload';

@Injectable({ providedIn: 'root' })
export class JwtTokenService {

  constructor() {
  }

  decodeToken(token: string): TokenPayLoad {
    return jwt_decode(token);
  }

  getToken(): string {
    return localStorage.getItem('token');
  }

  isTokenExpired(tokenPayload: TokenPayLoad): boolean {
    const expiryTime = tokenPayload.exp;
    if (expiryTime) {
      return ((1000 * expiryTime) - (new Date()).getTime()) < 5000;
    } else {
      return false;
    }
  }
}
