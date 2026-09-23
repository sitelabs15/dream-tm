export interface ServiceItem {
  id: string;
  slug: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  bullets: string[];
  applications: string[];
  deliverables: string[];
}

export const servicesData: ServiceItem[] = [
  {
    id: "integracion-robotica",
    slug: "integracion-robotica",
    number: "01",
    title: "Integración de robots industriales",
    shortDescription: "Integración de robots para procesos de manufactura, estaciones automatizadas y líneas productivas.",
    fullDescription: "Implementamos celdas robotizadas e integraciones electromecánicas acopladas a líneas de ensamble continuo y estaciones individuales de trabajo, coordinando hardware, seguridad funcional y control.",
    bullets: [
      "Instalación mecánica y montaje de celdas",
      "Señales y periféricos industriales",
      "Comunicación con PLC de planta",
      "Mapeo de entradas y salidas (I/O)",
      "Sistemas de seguridad y barreras ópticas"
    ],
    applications: [
      "Celdas de manipulación de piezas pesadas",
      "Estaciones de carga y descarga de prensas",
      "Células cerradas con cortinas de seguridad"
    ],
    deliverables: [
      "Integración en celda operativa",
      "Esquema de conexionado y asignación I/O",
      "Pruebas de seguridad de perímetro validadas"
    ]
  },
  {
    id: "programacion-robots",
    slug: "programacion-robots",
    number: "02",
    title: "Programación de robots (FANUC & KUKA)",
    shortDescription: "Programación y configuración de secuencias, movimientos y procesos industriales.",
    fullDescription: "Desarrollo y ajuste de trayectorias cinemáticas de alta precisión para robots de 6 ejes, configurando rutinas de arranque seguro, lógicas de cambio de herramientas y coordinación con controladores.",
    bullets: [
      "Controladores FANUC (RJ3 y plataformas afines)",
      "Cinemáticas y cinemáticas KUKA",
      "Generación y depuración de trayectorias",
      "Manipulación y transferencia de componentes",
      "Soldadura por puntos (Spot Welding)",
      "Aplicación de selladores y adhesivos",
      "Secuencias de ensamble complejo"
    ],
    applications: [
      "Movimiento sincronizado con estaciones fijas",
      "Soldadura de subensambles automotrices",
      "Dispensado perimetral de adhesivos en carrocería"
    ],
    deliverables: [
      "Código fuente de trayectorias y rutinas",
      "Puntos de referencia y frames calibrados",
      "Validación de interferencias y zonas de colisión"
    ]
  },
  {
    id: "automatizacion-industrial",
    slug: "automatizacion-industrial",
    number: "03",
    title: "Automatización industrial",
    shortDescription: "Diseño y estructuración de estaciones automáticas y sistemas de control para manufactura.",
    fullDescription: "Articulamos la inteligencia operativa de la línea: desde la sensórica de campo y actuadores neumáticos o servomotores, hasta la orquestación secuencial en tiempo real.",
    bullets: [
      "Estaciones y celdas automáticas",
      "Líneas de producción continuas",
      "Sensores de proximidad, ópticos y de posición",
      "Actuadores neumáticos e hidráulicos",
      "Secuencias de ciclo y enclavamientos",
      "Control y supervisión de procesos"
    ],
    applications: [
      "Líneas de manufactura metalmecánica",
      "Prensas y estaciones de conformado",
      "Transportadores y transferencias automáticas"
    ],
    deliverables: [
      "Arquitectura de control estructurada",
      "Integración de periféricos en bus industrial",
      "Documentación técnica de enclavamientos"
    ]
  },
  {
    id: "commissioning",
    slug: "commissioning",
    number: "04",
    title: "Puesta en marcha / Commissioning",
    shortDescription: "Validación en campo, arranque controlado y soporte técnico para inicio de producción.",
    fullDescription: "Presencia técnica directa en planta durante la fase crítica de puesta en tensión, verificación punto a punto de señales y validación de ciclos en seco y con pieza viva.",
    bullets: [
      "Arranque escalonado en planta",
      "Pruebas punto a punto de entradas y salidas (I/O)",
      "Validación cinemática de movimientos",
      "Ajustes mecánicos finos y corrección de desvíos",
      "Debugging en tiempo real",
      "Acompañamiento en el inicio de producción"
    ],
    applications: [
      "Ramp-up de nuevas celdas de producción",
      "Reubicación o retrofitting de líneas existentes",
      "Validación de cambios de herramental"
    ],
    deliverables: [
      "Protocolo de verificación de señales I/O",
      "Checklist de ciclo en seco y con carga",
      "Validación de repetibilidad en estación"
    ]
  },
  {
    id: "optimizacion-procesos",
    slug: "optimizacion-procesos",
    number: "05",
    title: "Optimización de procesos",
    shortDescription: "Ajuste fino de trayectorias y reducción de tiempos de ciclo en estaciones existentes.",
    fullDescription: "Análisis técnico de movimientos parásitos, transiciones muertas entre robots y máquinas, y reconfiguración de secuencias para maximizar el ritmo de manufactura sin comprometer herramentales.",
    bullets: [
      "Reducción de tiempos de ciclo de estación",
      "Suavizado y optimización de trayectorias",
      "Coordinación de movimientos entre robots y transferencias",
      "Reordenamiento de secuencias lógicas",
      "Detección y diagnóstico de cuellos de botella"
    ],
    applications: [
      "Líneas con limitaciones de cadencia",
      "Estaciones críticas en cuellos de botella",
      "Sincronización robot-máquina de inyección o prensa"
    ],
    deliverables: [
      "Revisión de ciclo actual vs ciclo optimizado",
      "Programa depurado de trayectorias",
      "Estabilización de cadencia en producción regular"
    ]
  },
  {
    id: "soporte-industrial",
    slug: "soporte-industrial",
    number: "06",
    title: "Soporte técnico industrial",
    shortDescription: "Diagnóstico de fallas, ajustes correctivos y soporte en piso de producción.",
    fullDescription: "Atención especializada ante incidencias operativas complejas en controladores de robots, pérdidas de calibración, fallas intermitentes en buses de comunicación o desajustes de herramental.",
    bullets: [
      "Troubleshooting en controladores robóticos",
      "Corrección de fallas y bugs de programación",
      "Recalibración de ceros y masterización de ejes",
      "Ajustes directos en turnos de producción",
      "Diagnóstico de señales, sensores y actuadores",
      "Restablecimiento de comunicación en buses industriales"
    ],
    applications: [
      "Incidencias en controladores FANUC RJ3 o afines",
      "Pérdidas de punto de calibración tras colisión",
      "Fallas de sincronismo entre PLC y robot"
    ],
    deliverables: [
      "Diagnóstico técnico de causa raíz",
      "Ajuste y corrección de parámetros en controlador",
      "Prueba de ciclo completo para liberación de celda"
    ]
  }
];
