export interface NavItem {
  label: string;
  href: string;
  isAction?: boolean;
}

export const mainNavItems: NavItem[] = [
  { label: "Inicio", href: "#hero" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Servicios", href: "#servicios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Proceso", href: "#proceso" },
  { label: "Industrias", href: "#industrias" },
  { label: "Contacto", href: "#contacto" }
];

export const footerServiceLinks = [
  { label: "Integración de robots", href: "#servicios" },
  { label: "Programación FANUC & KUKA", href: "#servicios" },
  { label: "Automatización industrial", href: "#servicios" },
  { label: "Commissioning y puesta en marcha", href: "#servicios" },
  { label: "Optimización de ciclo", href: "#servicios" },
  { label: "Soporte técnico a planta", href: "#servicios" }
];

export const footerCompanyLinks = [
  { label: "Sobre Dream TM", href: "#nosotros" },
  { label: "Método de trabajo", href: "#proceso" },
  { label: "Proyectos documentados", href: "#proyectos" },
  { label: "Preguntas frecuentes", href: "#faq" },
  { label: "Contacto directo", href: "#contacto" }
];
