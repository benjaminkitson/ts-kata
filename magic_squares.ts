// https://www.codewars.com/kata/633d7409c8bd7c4a853c2ba9/train/typescript

export function isValid(square: number[][], gap: number) {
  const testGap = (square: number[][], gap: number) => {
    const sortNums = (a: number, b: number) => (a < b ? -1 : a > b ? 1 : 0);
    const orderedNums = square.flat().sort(sortNums);
    let test = true;
    for (let i = 0; i < orderedNums.length - 1; i++) {
      test = orderedNums[i + 1] - orderedNums[i] === gap;
      if (!test) {
        break;
      }
    }
  };
  const isGapValid = testGap(square, gap);
  console.log(isGapValid);
  return true;
}
