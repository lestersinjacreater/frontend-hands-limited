export interface Customer {
    userid: string;
    username: string;
    email: string;
    phone?: string;
  }
  
  export interface CustomerFormData {
    username: string;
    email: string;
    phone?: string;
  }