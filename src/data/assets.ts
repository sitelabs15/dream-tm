/**
 * Centralized Image Assets for DREAM TM
 * High-contrast industrial manufacturing, 6-axis robotic arms, automotive assembly cells.
 * All image slots feature styled CSS/SVG fallback components to guarantee zero broken images.
 */

export interface ImageAsset {
  src: string;
  alt: string;
  label: string;
  coord: string;
}

export const industrialAssets: Record<string, ImageAsset> = {
  heroRobot: {
    src: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1600&q=80",
    alt: "Brazo robótico articulado industrial en celda de manufactura automotriz",
    label: "ROBOT CELL / 01",
    coord: "X: 19.041  Y: -98.206"
  },
  projectFanuc: {
    src: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80",
    alt: "Robot industrial manipulando componente mecánico en estación de producción",
    label: "CELL GMT560 / COMPONENT TRANSFER",
    coord: "PUEBLA / SAN MARTIN"
  },
  automotiveLine: {
    src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=80",
    alt: "Línea de producción automotriz robotizada con celdas de soldadura y ensamble",
    label: "BODY ASSEMBLY LINE",
    coord: "SYSTEM / ONLINE"
  },
  robotArmCloseup: {
    src: "https://images.unsplash.com/photo-1537462715879-360eeb61a0ad?auto=format&fit=crop&w=1200&q=80",
    alt: "Detalle mecánico de cabezal y eje cinemático de robot de manufactura",
    label: "AXIS 04-06 / KINEMATICS",
    coord: "PRECISION TOOL"
  },
  plcCabinet: {
    src: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?auto=format&fit=crop&w=1200&q=80",
    alt: "Gabinete de control PLC y cableado estructurado para automatización industrial",
    label: "PLC RACK / I-O BUS",
    coord: "CONTROL CAB / 24VDC"
  },
  commissioning: {
    src: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1200&q=80",
    alt: "Pruebas de puesta en marcha técnica en planta de manufactura",
    label: "FIELD COMMISSIONING",
    coord: "VERIFICATION PHASE"
  }
};
