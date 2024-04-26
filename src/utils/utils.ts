function hslToHex(h: number, s: number, l: number) {
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color)
      .toString(16)
      .padStart(2, "0"); // Convert to Hex and ensure 2 digits
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}

/**
 * Converts a string to a unique hex code
 * @param {string} str - The string to convert
 * @returns {string} - The resulting hex code
 * https://stackoverflow.com/questions/3426404/create-a-hexadecimal-colour-based-on-a-string-with-javascript
 */
export const stringToHex = (str: string) => {
  if (!str) return "#000000";

  // Check if the string is a number value
  if (/^\d+$/.test(str)) {
    // Convert the number to a hue in the HSL color space
    const hue = parseInt(str) % 360;
    const saturation = (parseInt(str) % 50) + 50;
    const lightness = (parseInt(str) % 50) + 25;
    return hslToHex(hue, saturation, lightness);
  }

  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = "#";
  for (let i = 0; i < 3; i++) {
    const value = (hash >> (i * 8)) & 0xff;
    colour += ("00" + value.toString(16)).substr(-2);
  }
  return colour;
};

/**
 * Converts a hexadecimal color code to a corresponding text color.
 * @param hex - The hexadecimal color code to convert.
 * @returns The corresponding text color in hexadecimal format.
 * https://stackoverflow.com/questions/3942878/how-to-decide-font-color-in-white-or-black-depending-on-background-color
 */
export function textColourFromHex(hex: string) {
  var color = hex.charAt(0) === "#" ? hex.substring(1, 7) : hex;
  var r = parseInt(color.substring(0, 2), 16); // hexToR
  var g = parseInt(color.substring(2, 4), 16); // hexToG
  var b = parseInt(color.substring(4, 6), 16); // hexToB
  return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#000" : "#fff";
}
