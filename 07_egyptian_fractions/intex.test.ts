import { getFractions } from ".";

describe("getFractions", function () {
  it("First test", function () {
    expect(getFractions("3/4")).toEqual(["1/2", "1/4"]);
  });

  it("Second test", function () {
    expect(getFractions("12/4")).toEqual(["3"]);
  });

  it("Third test", function () {
    expect(getFractions("4/5")).toEqual(["1/2", "1/4", "1/20"]);
  });

  it("Fourth test", function () {
    expect(getFractions("0.66")).toEqual([
      "1/2",
      "1/7",
      "1/59",
      "1/5163",
      "1/53307975",
    ]);
  });
});
