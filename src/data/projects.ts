export interface ProjectItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  clientContext: string; // "Cliente industrial · Sector automotriz (Referencia pública: Frenos Rassini)"
  industry: string;
  location: string;
  robotModel: string;
  controller: string;
  application: string;
  projectNameRef?: string;
  challenge: string;
  solution: string;
  integrationDetails: string[];
  technologies: string[];
  resultsNote: string;
  isConfirmed: boolean;
}

export const projectsData: ProjectItem[] = [
  {
    id: "gmt560-fanuc-s430",
    slug: "integracion-robotica-manipulacion-componentes",
    number: "PROYECTO 01",
    title: "Integración robótica para manipulación de componentes",
    shortDescription: "Integración de robots industriales para un proceso de manipulación pesada dentro de un entorno de producción automotriz.",
    clientContext: "Sector automotriz · Componentes de frenado",
    industry: "Industria Automotriz",
    location: "San Martín Texmelucan, Puebla, México",
    robotModel: "FANUC S-430",
    controller: "Controlador RJ3",
    application: "Manipulación de maza automotriz (Wheel Hub)",
    projectNameRef: "Programa GMT560",
    challenge: "Automatizar la transferencia y orientación continua de mazas automotrices entre etapas de maquinado e inspección, garantizando repetibilidad y sujeción segura en condiciones de operación continua.",
    solution: "Integración de robot industrial articulado de alta capacidad de carga acoplado a un controlador especializado, programando trayectorias seguras y lógicas de enclavamiento con las estaciones adyacentes.",
    integrationDetails: [
      "Instalación e integración del brazo robótico FANUC S-430",
      "Configuración y programación sobre controlador FANUC RJ3",
      "Desarrollo de cinemáticas para sujeción y liberación de maza",
      "Mapeo de señales I/O con la lógica de línea",
      "Pruebas de verificación de ciclo y validación en piso de planta"
    ],
    technologies: [
      "FANUC S-430",
      "Controlador RJ3",
      "Entradas/Salidas Industriales",
      "Sistemas de Enclavamiento de Seguridad",
      "Gripper para Componente Mecánico"
    ],
    resultsNote: "Puesta en marcha exitosa con ciclo estable de manipulación de piezas en planta de manufactura automotriz.",
    isConfirmed: true
  }
];
