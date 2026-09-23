export interface RoboticProcess {
  id: string;
  number: string;
  name: string;
  description: string;
}

export const roboticProcesses: RoboticProcess[] = [
  {
    id: "manipulacion",
    number: "01",
    name: "Manipulación de piezas",
    description: "Transferencia de componentes pesados y geométricamente complejos entre prensas, máquinas y transportadores con alta repetibilidad."
  },
  {
    id: "soldadura",
    number: "02",
    name: "Soldadura por puntos",
    description: "Coordinación precisa de pinzas de soldadura por resistencia (Spot Welding), control de fuerza de cierre y gestión de secuencias de disparo."
  },
  {
    id: "adhesivos",
    number: "03",
    name: "Aplicación de adhesivos",
    description: "Dispensado uniforme de cordones y selladores de poliuretano, cordón constante adaptado a la velocidad cinemática del robot."
  },
  {
    id: "ensamble",
    number: "04",
    name: "Ensamble automatizado",
    description: "Posicionamiento exacto de subensambles mecánicos, remachado e inserción con verificación de alineación y encastre."
  },
  {
    id: "movimiento",
    number: "05",
    name: "Movimiento y paletizado",
    description: "Trayectorias ordenadas de clasificación, apilado y orientación para componentes de carrocería y estampados metálicos."
  },
  {
    id: "alimentacion",
    number: "06",
    name: "Alimentación de estaciones",
    description: "Carga y descarga sincronizada con tornos, centros de maquinado CNC y celdas de prueba sin demoras en ciclo."
  },
  {
    id: "integracion-lineas",
    number: "07",
    name: "Integración en líneas",
    description: "Interconexión sincronizada con sistemas de transporte aéreo o de piso (skids, rodillos) y control centralizado."
  }
];

export interface WorkStep {
  step: string;
  number: string;
  title: string;
  description: string;
  deliverable: string;
}

export const workSteps: WorkStep[] = [
  {
    step: "STEP 01",
    number: "01",
    title: "Diagnóstico",
    description: "Analizamos el proceso, equipos existentes, necesidades operativas y alcance.",
    deliverable: "Revisión técnica de requerimientos y viabilidad de integración."
  },
  {
    step: "STEP 02",
    number: "02",
    title: "Ingeniería",
    description: "Definimos la solución técnica, integración, periféricos, control y requerimientos.",
    deliverable: "Definición del esquema cinemático, mapeo de señales y lógica de control."
  },
  {
    step: "STEP 03",
    number: "03",
    title: "Programación e integración",
    description: "Configuramos robots, señales, sensores, comunicaciones y secuencias.",
    deliverable: "Rutinas de movimiento depuradas y enlaces de comunicación verificados."
  },
  {
    step: "STEP 04",
    number: "04",
    title: "Pruebas",
    description: "Validamos funcionamiento, movimientos, señales y comportamiento del sistema.",
    deliverable: "Ciclos en seco, comprobación de interlocks y pruebas de seguridad."
  },
  {
    step: "STEP 05",
    number: "05",
    title: "Puesta en marcha",
    description: "Realizamos los ajustes requeridos durante la implementación y el inicio de operación.",
    deliverable: "Acompañamiento en piso de planta y verificación con piezas vivas."
  },
  {
    step: "STEP 06",
    number: "06",
    title: "Soporte",
    description: "Acompañamos la estabilización y resolución de incidencias según el alcance contratado.",
    deliverable: "Ajuste fino de cadencia y resolución de incidencias en piso."
  }
];

export interface TechCategory {
  category: string;
  label: string;
  items: string[];
  note?: string;
}

export const techStackData: TechCategory[] = [
  {
    category: "ROBOTS",
    label: "Robótica industrial",
    items: ["FANUC (Series S, M y afines)", "KUKA (KRC y cinemáticas industriales)"],
    note: "Menciones basadas en referencias de integración comprobada. Las marcas pertenecen a sus respectivos fabricantes."
  },
  {
    category: "CONTROL",
    label: "Control de proceso",
    items: ["Integración con PLC de planta", "Módulos de entradas y salidas discretas y analógicas", "Coordinación de seguridades"],
    note: "Sincronización de señales de ciclo, fin de carrera y estado de estación."
  },
  {
    category: "CAMPO",
    label: "Instrumentación y campo",
    items: ["Sensores inductivos y ópticos", "Actuadores neumáticos y servomotores", "Presostatos y vacuostatos de sujeción"],
    note: "Verificación de presencia de pieza y control neumático en pinzas."
  },
  {
    category: "SEGURIDAD",
    label: "Seguridad funcional",
    items: ["Cortinas de seguridad ópticas", "Cierres mecánicos de puerta con enclavamiento", "Paros de emergencia clasificados", "Zonas de colisión controladas"],
    note: "Protección integral para personal de mantenimiento y operación."
  },
  {
    category: "COMUNICACIÓN",
    label: "Redes industriales",
    items: ["Redes de comunicación Robot / PLC", "Buses de campo industriales", "Monitoreo de señales remotas"],
    note: "Interconexión robusta sin pérdidas de paquete ni retardos."
  }
];
