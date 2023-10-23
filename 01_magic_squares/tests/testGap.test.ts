import { assert } from "chai";
import { testGap } from "..";

describe("testGap", () => {
  it("Returns true for a valid square", () => {
    expect(
      testGap(
        [
          [8, 1, 6],
          [3, 5, 7],
          [4, 9, 2],
        ],
        1
      )
    ).toBe(true);
  });

  it("Returns false for an invalid square", () => {
    expect(
      testGap(
        [
          [2, 1, 6],
          [3, 5, 7],
          [4, 9, 2],
        ],
        1
      )
    ).toBe(false);
  });
});
