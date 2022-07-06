const sum = require("./sum_arguments");

describe("Finding Sum of the integer", () => {
  test("Add 3 and 4", () => {
    expect(sum(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45);
  });

  test("Add 321 and 123 as a decimal value", () => {
    expect(sum(3.12, 1.23)).toBe(4.35);
  });

  test("Add 100 and 99 as string value", () => {
    expect(sum("100", "99")).toBe(199);
  });

  test("Add -1 and 4", () => {
    expect(sum(-1, 4)).toBe(3);
  });

  test("Add -1 and -4", () => {
    expect(sum(-1, -4)).toBe(-5);
  });
});
