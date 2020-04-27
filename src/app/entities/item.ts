export class Item {
  id: number;
  name: string;
  price: string;
  category: string;
  pictures: Picture[];
}

export class Picture {
  id: number;
  imageURL: string;
}
