export interface Service {
  serviceid: number;
  title: string;
  description: string;
  imageUrl?: string;
  createdAt: string;
}

export interface ServiceFormData {
  title: string;
  description: string;
  image: File | null;
}
