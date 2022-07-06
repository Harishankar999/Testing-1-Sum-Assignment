const Tax = require("./tax_calculator");

describe("Finding Tax", () => {
  test("Amout -> 2,50,000 Saving -> 247500", () => {
    expect(Tax(250000)).toBe(225000);
  });
  test("Amout -> 11,50,000 Saving -> 805000", () => {
    expect(Tax(1150000)).toBe(805000);
  });
  test("Amout -> 50,000 Saving -> 50000", () => {
    expect(Tax(50000)).toBe(50000);
  });
  test("Amout -> 9,50,000 Saving -> 760000", () => {
    expect(Tax(950000)).toBe(760000);
  });
});
