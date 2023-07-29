// https://www.codewars.com/kata/633d7409c8bd7c4a853c2ba9/train/typescript

type Square = [
  [number, number, number],
  [number, number, number],
  [number, number, number]
];

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

export const testRowEquality = (square: Square) => {
  const rowSums = square.map((row) => {
    return row.reduce((n, m) => n + m);
  });
  return rowSums.every((sum) => sum === rowSums[0]);
};

export const testColumnEquality = (square: Square) => {
  const colSums = [0, 0, 0];
  square.forEach((row) => {
    row.forEach((num, index) => (colSums[index] += num));
  });
  return colSums.every((sum) => sum === colSums[0]);
};

export function isMagicSquare(square: Square, gap: number) {
  const isGapValid = testGap(square, gap);
  console.log(isGapValid);
  return true;
}
