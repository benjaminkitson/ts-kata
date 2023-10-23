import { assert } from "chai";
import { isMagicSquare } from "..";

// ! Tests from the kata page itself

describe("Basic tests", function () {
  it("Valid 3x3 magic square", function () {
    expect(
      isMagicSquare(
        [
          [8, 1, 6],
          [3, 5, 7],
          [4, 9, 2],
        ],
        1
      )
    ).toBe(true);
  });

  it("Improper sums of row/col values", function () {
    expect(
      isMagicSquare(
        [
          [4, 1, 6],
          [3, 5, 7],
          [8, 9, 2],
        ],
        1
      )
    ).toBe(false);
  });

  it("Progression (sequence) and gap validation", function () {
    expect(
      isMagicSquare(
        [
          [9, 2, 7],
          [4, 6, 8],
          [5, 10, 3],
        ],
        1
      )
    ).toBe(true);

    expect(
      isMagicSquare(
        [
          [22, 1, 16],
          [7, 13, 19],
          [10, 25, 4],
        ],
        3
      )
    ).toBe(true);
  });

  it("Improper sums of row/col/diagonals values, invalid progression", function () {
    expect(
      isMagicSquare(
        [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9],
        ],
        1
      )
    ).toBe(false);

    expect(
      isMagicSquare(
        [
          [1, 2, 3, 4],
          [9, 10, 11, 12],
          [13, 14, 15, 16],
          [5, 6, 7, 8],
        ],
        1
      )
    ).toBe(false);

    assert.strictEqual(
      isMagicSquare(
        [
          [4, 9, 1e8],
          [1e7, 5, 1e9],
          [8, 1e6, 6],
        ],
        1
      ),
      false,
      "Improper sums of row/col/diagonals values, invalid progression"
    );
  });

  it("Duplicated numbers", function () {
    assert.strictEqual(
      isMagicSquare(
        [
          [5, 5, 5],
          [5, 5, 5],
          [5, 5, 5],
        ],
        1
      ),
      false,
      "Duplicated numbers so square is not valid"
    );
  });
});
