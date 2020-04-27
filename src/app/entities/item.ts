export class Item {
  id: number;
  name: string;
  price: string;
  category: string;
  pictures: Picture[];
}

class Picture {
  id: number;
  imageURL: string;
}
