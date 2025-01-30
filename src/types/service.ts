export interface Service {
    serviceid: string;
    title: string;
    description: string;
    price: number;
    imageUrl?: string;
  }
  
  export interface ServiceFormData {
    name: string;
    description: string;
    price: number;
    Image: File | null;
  }

  