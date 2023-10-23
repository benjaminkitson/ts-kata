import { assert } from "chai";
import { isColsValid } from "..";

describe("isColsvalid", () => {
  it("Returns true when the sums of the columns are equal and equal to the supplied target sum", () => {
    expect(
      isColsValid(
        [
          [1, 3, 3],
          [2, 1, 1],
          [3, 2, 2],
        ],
        6
      )
    ).toBe(true);
  });

  it("Returns false when the sums of the columns are equal but not equal to the supplied target sum", () => {
    expect(
      isColsValid(
        [
          [1, 3, 3],
          [2, 1, 1],
          [3, 2, 2],
        ],
        7
      )
    ).toBe(false);
  });

  it("Returns false when the sums of the columns are not equal", () => {
    assert.strictEqual(
      isColsValid(
        [
          [1, 3, 3],
          [2, 1, 1],
          [3, 2, 0],
        ],
        2
      ),
      false
    );
  });
});
