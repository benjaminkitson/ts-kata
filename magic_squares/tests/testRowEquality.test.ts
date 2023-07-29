import { assert } from "chai";
import { testRowEquality } from "..";

describe("testRowEquality", () => {
  it("Returns true when the sums of the rows are equal", () => {
    assert.strictEqual(
      testRowEquality([
        [1, 2, 3],
        [2, 1, 3],
        [3, 2, 1],
      ]),
      true
    );
  });

  it("Returns false when the sums of the rows are not equal", () => {
    assert.strictEqual(
      testRowEquality([
        [1, 5, 3],
        [8, 1, 3],
        [3, 2, 0],
      ]),
      false
    );
  });
});
