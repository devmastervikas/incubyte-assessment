/**
 * Developer: Vikas Singh
 *  Date: 2025-07-09
 * Description: Unit tests for the String Calculator add function.
 */

const { add } = require("../src/calculator");

describe("String Calculator", () => {
  test("should throw error when input contains negative numbers", () => {
    expect(() => add("1,-2")).toThrow("negative numbers not allowed -2");
  });
});
