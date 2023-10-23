import { assert } from "chai";
import { isRowsValid } from "..";

describe("isRowsValid", () => {
  it("Returns true when the sums of the rows are equal and equal to the target sum", () => {
    expect(
      isRowsValid(
        [
          [1, 2, 3],
          [2, 1, 3],
          [3, 2, 1],
        ],
        6
      )
    ).toBe(true);
  });

  it("Returns true when the sums of the rows are equal but not equal to the target sum", () => {
    expect(
      isRowsValid(
        [
          [1, 2, 3],
          [2, 1, 3],
          [3, 2, 1],
        ],
        7
      )
    ).toBe(false);
  });

  it("Returns false when the sums of the rows are not equal", () => {
    expect(
      isRowsValid(
        [
          [1, 5, 3],
          [8, 1, 3],
          [3, 2, 0],
        ],
        9
      )
    ).toBe(false);
  });
});
