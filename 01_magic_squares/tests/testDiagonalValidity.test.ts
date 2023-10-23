import { testDiagonalValidity } from "..";

describe("testDiagonalValidity", () => {
  it("Returns the sum of the diagonals when they are equal", () => {
    expect(
      testDiagonalValidity([
        [1, 2, 3],
        [2, 1, 3],
        [1, 2, 3],
      ])
    ).toBe(5);
  });

  it("Returns null when the sums of the diagonals are not equal", () => {
    expect(
      testDiagonalValidity([
        [1, 5, 3],
        [8, 1, 3],
        [3, 2, 0],
      ])
    ).toBe(null);
  });
});
