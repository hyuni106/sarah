const Colors = {
  white: '#ffffff',
  black: '#000000',
  transparent: 'transparent',
  g1: '#343435',
  g2: '#424345',
  g3: '#707177',
  g4: '#B1B1BB',
  g5: '#E3E3E3',
  g6: '#F3F3F3',
  red: '#EB5757',
  orange: '#F2994A',
  yellow: '#F2C94C',
  green1: '#219653',
  green2: '#27AE60',
  green3: '#6FCF97',
  blue1: '#2D68DB',
  blue2: '#6E92F0',
  blue3: '#A5C1F8'
} as const;

export default Colors;

const hexToRGB = (input: string) => {
  let hex = input;

  if (hex.length === 4) {
    hex = hex[0] + hex[1] + hex[1] + hex[2] + hex[2] + hex[3] + hex[3];
  }

  return {
    r: parseInt(hex.substring(1, 3), 16),
    g: parseInt(hex.substring(3, 5), 16),
    b: parseInt(hex.substring(5, 7), 16)
  };
};

const formatRGB = ({ r, g, b }: { r: number; g: number; b: number }) => `rgb(${r},${g},${b})`;
const formatRGBA = ({ r, g, b }: { r: number; g: number; b: number }, alpha: number) =>
  `rgba(${r},${g},${b},${alpha})`;

/**
 * @param {string} input - A color in hexadecimal syntax. e.g. #fa6d01
 * @param {number} alpha - The desired opacity, from 0 to 1.
 * @returns {string} - The new color in rgba() or rgb() syntax.
 */
export const hexAlpha = (input: string, alpha: number) => {
  const newColor = hexToRGB(input);

  return typeof alpha === 'number' && alpha >= 0 && alpha <= 1
    ? formatRGBA(newColor, alpha)
    : formatRGB(newColor);
};
