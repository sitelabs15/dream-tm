/**
 * DREAM TM - Company Data Configuration
 * Strictly verified public information without fabricated metrics.
 */

export interface CompanyConfig {
  name: string;
  legalName?: string;
  tagline: string;
  description: string;
  location: {
    street: string;
    neighborhood: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    fullAddress: string;
    coordinates: {
      lat: number;
      lng: number;
    };
    googleMapsUrl: string;
  };
  contact: {
    phone: string;
    phoneFormatted: string;
    emailPrimary: string;
    emailSecondary: string;
  };
  scheduleNote: string;
  // Unconfirmed fields kept as optional / undefined to prevent rendering
  foundingYear?: number;
  whatsappEnabled: boolean; // Set to false per specification
  whatsappNumber?: string;
  certifications?: string[];
  socials?: Record<string, string>;
  googleRating: {
    score: number;
    totalReviews: number;
    source: string;
  };
  brandDisclaimer: string;
}

export const companyData: CompanyConfig = {
  name: "DREAM TM",
  legalName: "Dream TM", // Nota: razón social formal pendiente de ratificación contractual
  tagline: "Ingeniería para hacer que las cosas sucedan",
  description: "Diseñamos, integramos y programamos soluciones de automatización industrial para robots, estaciones y procesos de manufactura.",
  location: {
    street: "Juan de Salmerón 8-A",
    neighborhood: "Colonia Fundadores",
    city: "Heroica Puebla de Zaragoza",
    state: "Puebla",
    country: "México",
    postalCode: "72580",
    fullAddress: "Juan de Salmerón 8-A, Col. Fundadores, C.P. 72580, Puebla, Puebla, México",
    coordinates: {
      lat: 19.0414,
      lng: -98.2063
    },
    googleMapsUrl: "https://maps.google.com/?q=Juan+de+Salmer%C3%B3n+8-A,+Fundadores,+72580+Puebla,+Pue."
  },
  contact: {
    phone: "2221141440",
    phoneFormatted: "+52 222 114 1440",
    emailPrimary: "dream.tm.mx@dreamtm.com.mx",
    emailSecondary: "dream.tm.mx@gmail.com"
  },
  scheduleNote: "Visitas y atención técnica con previa coordinación.",
  whatsappEnabled: false, // Desactivado hasta confirmación expresa de canal WhatsApp
  googleRating: {
    score: 4.8,
    totalReviews: 8,
    source: "Reseña publicada en Google"
  },
  brandDisclaimer: "FANUC y KUKA son marcas registradas de sus respectivos fabricantes. Las menciones corresponden a experiencia técnica en integración y programación sobre dichos sistemas."
};
