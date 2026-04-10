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

export interface SEO {
  title: string;
  description: string;
  image: string;
}

export interface Contact {
  phone: string;
  whatsapp: string;
  email: string;
  address: string;
  ctaHeadline: string;
  whatsappLabel: string;
  whatsappMicrocopy: string;
  mapEmbed: string;
  mapLink: string;
}

export interface FooterLink {
  text: string;
  href: string;
}

export interface Footer {
  tagline: string;
  links: FooterLink[];
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

export interface GalleryImage {
  src: string;
  alt: string;
}

export interface Images {
  hero: string;
  interior: string;
  gallery: GalleryImage[];
}

export interface FeaturedDish {
  name: string;
  price: string;
  image: string;
  alt: string;
}

export interface Review {
  name: string;
  text: string;
  rating: number;
}

export interface ClientData {
  name: string;
  tagline: string;
  description: string;
  seo: SEO;
  images: Images;
  about: About;
  contact: Contact;
  schedule: Schedule;
  cta: CTA;
  menu: Menu;
  featuredDishes: FeaturedDish[];
  social: Social;
  reviews: Review[];
  footer: Footer;
  sections: Sections;
}
