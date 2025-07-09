/**
 * Developer: Vikas Singh
 *  Date: 2025-07-09
 * Description: Unit tests for the String Calculator add function.
 */

const { add } = require("../src/calculator");

describe("String Calculator", () => {
  test("should show all negative numbers in the exception message", () => {
    expect(() => add("1,-2,-5")).toThrow("negative numbers not allowed -2,-5");
  });
});
