export interface Testimonial {
    testimonialid: number;
    userId: number;
    text: string;
    createdAt: string;
    user: {
      username: string;
      position: string;
    };
  }
  
  export interface TestimonialFormData {
    text: string;
    userId?: number;
  }