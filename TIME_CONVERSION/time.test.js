const time = require("./time_conversion");

describe("Find The Time", () => {
  test("5 Seconds", () => {
    expect(time(5200)).toBe("5 Seconds");
  });
  test("3 Minutes 20 Seconds", () => {
    expect(time(200000)).toBe("3 Minutes 20 Seconds");
  });
  test("1 Minute", () => {
    expect(time(60000)).toBe("1 Minute");
  });
  test("3 Minutes 20 Seconds", () => {
    expect(time(180000)).toBe("3 Minutes");
  });
});
