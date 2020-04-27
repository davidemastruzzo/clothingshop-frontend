import {Picture} from './picture';

export class Item {
  id: number;
  name: string;
  price: number;
  description: string;
  category: string;
  pictures: Picture[];
}
