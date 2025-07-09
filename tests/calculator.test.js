/**
 * Developer: Vikas Singh
 * Description: Unit tests for the String Calculator add function.
 */

const { add } = require("../src/calculator");

describe("String Calculator", () => {
  test("should return sum of multiple comma-separated numbers", () => {
    expect(add("1,2,3,4")).toBe(10);
  });
});
