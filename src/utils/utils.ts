/**
 * Converts a string to a unique hex code
 * @param {string} str - The string to convert
 * @returns {string} - The resulting hex code
 */
export function stringToHex(str: string) {
  let hash = 0;
  if (str.length == 0) return hash.toString();
  for (let i = 0; i < str.length; i++) {
    let char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  let hex = hash.toString(16);
  // Ensure the hex value has a length of at least 6
  while (hex.length < 6) {
    hex = "0" + hex;
  }
  return "#" + hex;
}
