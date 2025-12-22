export interface Information {
  name: string;
  location: string;
  phone: string;
}

export interface BusinessHours {
  day: string;
  open: string;
  close: string;
  closed: boolean;
}

export interface SocialMedia {
  instagram_handle: string;
  instagram_url: string;
}

export interface Service {
    id: string;
    serviceName: string;
    serviceDescription: string;
    servicePrice: string;
    serviceDuration: number;
    serviceImage: string;
}

export interface Category {
  title: string;
  description: string;
  imgSrc: string;
  href: string;
}

export interface General {
  question: string;
  answer: string;
}

export interface Pricing {
  question: string;
  answer: string;
}

export interface Appointments {
  question: string;
  answer: string;
}

export interface Faqs {
    categories: Category[];
    general: General[];
    pricing: Pricing[];
    appointments: Appointments[];
}

export interface Database {
  information: Information;
  business_hours: BusinessHours[];
  social_media: SocialMedia;
  services: Service[];
  faqs: Faqs;
}