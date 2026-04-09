export interface MenuItem {
  name: string;
  price: string;
}

export interface MenuCategory {
  name: string;
  items: MenuItem[];
}

export interface Menu {
  categories: MenuCategory[];
}

export interface Contact {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
}

export interface Schedule {
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  saturday: string;
  sunday: string;
}

export interface About {
  title: string;
  text: string;
}

export interface CTA {
  primary: string;
  secondary: string;
}

export interface Social {
  instagram: string;
  tiktok: string;
  facebook: string;
}

export interface Sections {
  hero: boolean;
  menu: boolean;
  gallery: boolean;
  about: boolean;
  reviews: boolean;
  contact: boolean;
}

export interface ClientData {
  name: string;
  tagline: string;
  description: string;
  about: About;
  contact: Contact;
  schedule: Schedule;
  cta: CTA;
  menu: Menu;
  social: Social;
  sections: Sections;
}
