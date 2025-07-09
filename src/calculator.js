/**
 * Developer: Vikas Singh
 * Date: 2025-07-09
 * Adds numbers provided in a string, separated by delimiters.
 * Returns 0 for an empty string.
 * @param {string} numbers - String containing, delimiter and numbers to add.
 * @returns {number} Sum of the numbers.
 */
function add(numbers) {
  if (numbers === "") return 0;
  let delimiter = /,|\n/;

  if (numbers.startsWith("//")) {
    const parts = numbers.split("\n");
    delimiter = new RegExp(parts[0].slice(2));
    numbers = parts[1];
  }

  const values = numbers
    .split(delimiter)
    .map(Number)
    .filter((n) => !isNaN(n));

  const negatives = values.filter((n) => n < 0);
  if (negatives.length > 0) {
    throw new Error(`negative numbers not allowed ${negatives.join(",")}`);
  }

  return values.reduce((sum, val) => sum + val, 0);
}

module.exports = { add };
