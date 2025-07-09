/**
 * Developer: Vikas Singh
 * Description: Unit tests for the String Calculator add function.
 */

const { add } = require("../src/calculator");

describe("String Calculator", () => {
  test("should return number when input has one number", () => {
    expect(add("5")).toBe(5);
  });
});
