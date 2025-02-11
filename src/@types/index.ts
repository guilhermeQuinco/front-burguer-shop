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
  description: string;
}

export interface ICategoryItemResponse {
  id: number;
  name: string;
  slug: string;
  items: IItem[];
}
