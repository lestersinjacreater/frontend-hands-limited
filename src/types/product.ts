export interface Product {
  productid: number;
  title: string;
  description: string;
  imageUrl?: string;
  createdAt: string;
}

export interface ProductFormData {
  title: string;
  description: string;
  image: File | null;
}