/**
 * Developer: Vikas Singh
 * Adds numbers provided in a string, separated by delimiters.
 * Returns 0 for an empty string.
 * @param {string} numbers - String containing numbers to add.
 * @returns {number} Sum of the numbers.
 */
function add(numbers) {
  if (numbers === "") return 0;
  if (!numbers.includes(",")) return parseInt(numbers, 10);
  return numbers
    .split(",")
    .map(Number)
    .reduce((a, b) => a + b, 0);
}

module.exports = { add };
