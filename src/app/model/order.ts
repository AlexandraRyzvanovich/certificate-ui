import {Certificate} from './certificate';

export interface Order {
  id: number;
  date: object;
  amount: number;
  certificate: Certificate;
}
