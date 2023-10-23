import { assert } from "chai";
import { isSquare } from "..";

describe("isSquare", () => {
  it("Returns true when a legal square is supplied", () => {
    expect(
      isSquare([
        [1, 2, 3],
        [2, 1, 3],
        [3, 2, 1],
      ])
    ).toBe(true);
  });

  it("Returns false when a non array value is supplied", () => {
    expect(isSquare(1)).toBe(false);
  });

  it("Returns false when an array that is not a legal square is supplied", () => {
    expect(
      isSquare([
        [1, 2, 3],
        [2, 1, 3, 5],
        [3, 2, 1],
      ])
    ).toBe(false);
  });
});
