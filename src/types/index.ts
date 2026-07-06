export interface Project {
  id: string;
  name: string;
  slug: string;
  type: string;
  location: string;
  city: string;
  description: string;
  longDescription: string;
  price: string;
  priceNote?: string;
  developer: string;
  rera?: string;
  status: "ready" | "upcoming" | "ongoing";
  statusLabel: string;
  propertyType: "flat" | "villa" | "plot" | "affordable" | "shop";
  budget: string;
  featured: boolean;
  configurations: Configuration[];
  amenities: string[];
  specifications: Specification[];
  locationAdvantages: string[];
  nearbyInfra: string[];
  images: ProjectImage[];
  heroImage: string;
  floorPlans?: string[];
  brochureUrl?: string;
  youtubeUrl?: string;
  mapsUrl?: string;
  mapsEmbed?: string;
  possessionDate?: string;
  totalUnits?: string;
  totalArea?: string;
  constructionStatus?: string;
}

export interface Configuration {
  type: string;
  area: string;
  price: string;
}

export interface Specification {
  label: string;
  value: string;
}

export interface ProjectImage {
  src: string;
  alt: string;
  category?: "exterior" | "interior" | "amenity" | "floorplan" | "construction";
}

export interface ContactFormData {
  name: string;
  phone: string;
  email?: string;
  message: string;
  consent: boolean;
  honeypot?: string;
}

export interface EnquiryFormData {
  name: string;
  phone: string;
  email?: string;
  projectName: string;
  configuration?: string;
  message?: string;
  consent: boolean;
  honeypot?: string;
}

export interface SiteVisitFormData {
  name: string;
  phone: string;
  email?: string;
  projectName?: string;
  preferredDate?: string;
  preferredTime?: string;
  consent: boolean;
  honeypot?: string;
}

export interface CallbackFormData {
  name: string;
  phone: string;
  preferredTime?: string;
  consent: boolean;
  honeypot?: string;
}

export interface FormResponse {
  success: boolean;
  message: string;
}
