export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export const faqsData: FAQItem[] = [
  {
    id: "tipo-proyectos",
    question: "¿Qué tipo de proyectos realiza Dream TM?",
    answer: "Dream TM trabaja en proyectos relacionados con automatización industrial, integración de robots, programación, puesta en marcha, soporte y optimización de procesos para líneas y estaciones de manufactura."
  },
  {
    id: "robots-fanuc",
    question: "¿Trabajan con robots FANUC?",
    answer: "Existen referencias públicas de experiencia con robots FANUC, incluyendo una integración con FANUC S-430 y controlador RJ3. El alcance y los modelos atendidos actualmente deben confirmarse para cada proyecto."
  },
  {
    id: "robots-kuka",
    question: "¿Trabajan con robots KUKA?",
    answer: "Existen referencias profesionales relacionadas con programación, commissioning y soporte de robots KUKA. La disponibilidad depende del alcance y requerimientos específicos del proyecto."
  },
  {
    id: "cobertura-puebla",
    question: "¿Atienden proyectos fuera de Puebla?",
    answer: "Nuestra base operativa se encuentra en Puebla, Puebla. Puedes consultar directamente con el equipo de ingeniería de Dream TM la cobertura técnica y logística disponible para tu planta o región."
  },
  {
    id: "integracion-linea",
    question: "¿Pueden integrar una línea completa?",
    answer: "Dream TM trabaja en integración de robots y sistemas automáticos. El alcance técnico se define individualmente según las características, equipos preexistentes y objetivos del proyecto."
  },
  {
    id: "mantenimiento",
    question: "¿Ofrecen mantenimiento?",
    answer: "La información disponible confirma experiencia en soporte y solución de incidencias técnicas en piso de producción. Consulta qué modalidades y alcances de soporte se encuentran disponibles para tu instalación."
  },
  {
    id: "solicitar-cotizacion",
    question: "¿Puedo solicitar una cotización?",
    answer: "Sí. Puedes enviar los datos iniciales de tu proyecto mediante el formulario técnico de contacto o comunicarte directamente para que el equipo evalúe el alcance de ingeniería requerido."
  }
];
