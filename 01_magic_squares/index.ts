// https://www.codewars.com/kata/633d7409c8bd7c4a853c2ba9/train/typescript

type Square = [
  [number, number, number],
  [number, number, number],
  [number, number, number]
];

export const isSquare = (square: unknown): square is Square => {
  return (
    Array.isArray(square) &&
    square.every((item) => Array.isArray(item) && item.length === square.length)
  );
};

export const testGap = (square: Square, gap: number) => {
  const sortNums = (a: number, b: number) => (a < b ? -1 : a > b ? 1 : 0);
  const orderedNums = square.flat().sort(sortNums);
  let test = true;
  for (let i = 0; i < orderedNums.length - 1; i++) {
    test = orderedNums[i + 1] - orderedNums[i] === gap;
    if (!test) {
      break;
    }
  }
  return test;
};

export const isRowsValid = (square: Square, targetSum: number) => {
  const rowSums = square.map((row) => {
    return row.reduce((n, m) => n + m);
  });
  return rowSums[0] === targetSum && rowSums.every((sum) => sum === rowSums[0]);
};

export const isColsValid = (square: Square, targetSum: number) => {
  const colSums = [0, 0, 0];
  square.forEach((row) => {
    row.forEach((num, index) => (colSums[index] += num));
  });
  return colSums[0] === targetSum && colSums.every((sum) => sum === colSums[0]);
};

/**
 * Returns the sum of the diagonals when equal, and null if not
 */
export const testDiagonalValidity = (square: Square) => {
  const diagSums = [0, 0];
  square.forEach((row, i) => {
    diagSums[0] += row[i];
    diagSums[1] += row[row.length - 1 - i];
  });
  return diagSums[0] === diagSums[1] ? diagSums[0] : null;
};

export function isMagicSquare(square: unknown, gap: number) {
  if (!isSquare(square)) {
    return false;
  }
  const targetSum = testDiagonalValidity(square);
  if (targetSum === null) {
    return false;
  }
  return (
    isRowsValid(square, targetSum) &&
    isColsValid(square, targetSum) &&
    testGap(square, gap)
  );
}
