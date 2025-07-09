/**
 * Developer: Vikas Singh
 *  Date: 2025-07-09
 * Description: Unit tests for the String Calculator add function.
 */

const { add } = require("../src/calculator");

describe("String Calculator", () => {
  test("should return 0 for an empty string", () => {
    expect(add("")).toBe(0);
  });
  test("should return number when input has one number", () => {
    expect(add("5")).toBe(5);
  });
  test("should return sum of two comma-separated numbers", () => {
    expect(add("1,2")).toBe(3);
  });
  test("should return sum of multiple comma-separated numbers", () => {
    expect(add("1,2,3,4")).toBe(10);
  });

  test("should handle newline as delimiter along with commas", () => {
    expect(add("1\n2,3")).toBe(6);
  });

  test("should support custom delimiter syntax //;\n1;2", () => {
    expect(add("//;\n1;2")).toBe(3);
  });

  test("should throw error when input contains negative numbers", () => {
    expect(() => add("1,-2")).toThrow("negative numbers not allowed -2");
  });

  test("should show all negative numbers in the exception message", () => {
    expect(() => add("1,-2,-5")).toThrow("negative numbers not allowed -2,-5");
  });
});
