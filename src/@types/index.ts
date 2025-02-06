export interface ICategory {
  id: number;
  name: string;
  slug: string;
}

export interface IItem {
  id: number;
  name: string;
  category: ICategory;
  imageUrl: string;
}
