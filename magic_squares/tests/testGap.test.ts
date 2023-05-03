import { assert } from "chai";
import { testGap } from "../isMagicSquare";

describe("testGap", () => {
  it("Returns true for a valid square", () => {
    assert.strictEqual(
      testGap(
        [
          [8, 1, 6],
          [3, 5, 7],
          [4, 9, 2],
        ],
        1
      ),
      true
    );
  });

  it("Returns false for an invalid square", () => {
    assert.strictEqual(
      testGap(
        [
          [2, 1, 6],
          [3, 5, 7],
          [4, 9, 2],
        ],
        1
      ),
      false
    );
  });
});
