/**
 * Developer: Vikas Singh
 *  Date: 2025-07-09
 * Description: Unit tests for the String Calculator add function.
 */

const { add } = require("../src/calculator");

describe("String Calculator", () => {
  test("should handle newline as delimiter along with commas", () => {
    expect(add("1\n2,3")).toBe(6);
  });
});
