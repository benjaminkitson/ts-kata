import { assert } from "chai";
import { testColumnEquality } from "..";

describe("testColumnEquality", () => {
  it("Returns true when the sums of the columns are equal", () => {
    assert.strictEqual(
      testColumnEquality([
        [1, 3, 3],
        [2, 1, 1],
        [3, 2, 2],
      ]),
      true
    );
  });

  it("Returns false when the sums of the columns are not equal", () => {
    assert.strictEqual(
      testColumnEquality([
        [1, 3, 3],
        [2, 1, 1],
        [3, 2, 0],
      ]),
      false
    );
  });
});
