/**
 * Developer: Vikas Singh
 * Date: 2025-07-09
 * Adds numbers provided in a string, separated by delimiters.
 * Returns 0 for an empty string.
 * @param {string} numbers - String containing numbers to add.
 * @returns {number} Sum of the numbers.
 */
function add(numbers) {
  if (numbers === "") return 0;
  if (!numbers.includes(",")) return parseInt(numbers, 10);

  const values = numbers.split(",").map(Number);
  return values.reduce((sum, val) => sum + val, 0);
}

module.exports = { add };
