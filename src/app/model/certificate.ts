import {Tag} from './tag';

export interface Certificate{
  id: number;
  name: string;
  description: string;
  price: number;
  creationDate: object;
  modificationDate: object;
  validDays: number;
  tags: Tag[];
  endDate: object;
}
