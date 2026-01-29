
export interface Product {
  id: string;
  name: string;
  category: string;
  description: string;
  image: string;
  features: string[];
}

export interface ServiceCategory {
  title: string;
  items: string[];
}

export interface Project {
  id: string;
  title: string;
  location: string;
  client: string;
}

export interface Personnel {
  name: string;
  experience: string;
  specialization: string;
}

export enum Page {
  Home = 'home',
  About = 'about',
  Services = 'services',
  Credentials = 'credentials',
  Careers = 'careers',
  Contacts = 'contacts',
  Products = 'products'
}
