export interface Customer {
    id: string;
    name: string;
    email: string;
    phone?: string;
  }
  
  export interface CustomerFormData {
    name: string;
    email: string;
    phone?: string;
  }