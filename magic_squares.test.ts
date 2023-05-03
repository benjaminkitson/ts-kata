import { assert } from 'chai';
import { isValid } from './magic_squares';

describe("Basic tests", function () {
    it("Valid 3x3 magic square", function () {
        assert.strictEqual(
            isValid(
                [
                    [8, 1, 6],
                    [3, 5, 7],
                    [4, 9, 2],
                ],
                1
            ),
            true,
            "Should be valid"
        );
    });

    it("Improper sums of row/col values", function () {
        assert.strictEqual(
            isValid(
                [
                    [4, 1, 6],
                    [3, 5, 7],
                    [8, 9, 2],
                ],
                1
            ),
            false,
            "Improper sums of row/col values"
        );
    });

    it("Progression (sequence) and gap validation", function () {
        assert.strictEqual(
            isValid(
                [
                    [9, 2, 7],
                    [4, 6, 8],
                    [5, 10, 3],
                ],
                1
            ),
            true,
            "Should be valid with sequence starting at 2 and gap = 1"
        );

        assert.strictEqual(
            isValid(
                [
                    [22, 1, 16],
                    [7, 13, 19],
                    [10, 25, 4],
                ],
                3
            ),
            true,
            "Should be valid with sequence starting at 1 and gap = 3"
        );
    });

    it("Improper sums of row/col/diagonals values, invalid progression", function () {
        assert.strictEqual(
            isValid(
                [
                    [1, 2, 3],
                    [4, 5, 6],
                    [7, 8, 9],
                ],
                1
            ),
            false,
            "Improper sums of row/col/diagonals values, valid progression"
        );

        assert.strictEqual(
            isValid(
                [
                    [1, 2, 3, 4],
                    [9, 10, 11, 12],
                    [13, 14, 15, 16],
                    [5, 6, 7, 8],
                ],
                1
            ),
            false,
            "Improper sums of row/col/diagonals values, valid progression"
        );

        assert.strictEqual(
            isValid(
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
            isValid(
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