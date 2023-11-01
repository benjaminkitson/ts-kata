// https://www.codewars.com/kata/54f8693ea58bce689100065f

const fractionRx = /(\d+)\/(\d+)/;

const decimalRx = /\d+\.\d+/;

const isNumber = (val: any): val is number =>
  typeof val === "number" && val === val;

const fractionStringToFloat = (s: string): number | null => {
  // destructure the numerator n and denominator d from the match result
  const matchResult = s.match(fractionRx) || [];

  if (matchResult) {
    const [_, n, d] = matchResult;
    if (isNumber(parseInt(n)) && isNumber(parseInt(d))) {
      return parseInt(n) / parseInt(d);
    }
  }

  //   throw new Error("Failed to parse fraction");

  return null;
};

export const getFractions = (value: string) => {
  // If the value is a fraction, convert it into a float
  let float = fractionStringToFloat(value);

  if (!float) {
    float = parseFloat(value);
  }

  // Otherwise, it should be a stringified float, in which case parse it

  // O(n) approach => iterate through numbers 2 onwards
  const resultArr = [];

  if (float > 1) {
    const i = float % 1;
    resultArr.push(`${float - i}`);
    float = i;
  }

  let i = 2;
  while (true) {
    if (float >= 1 / i) {
      float -= 1 / i;
      resultArr.push(`1/${i}`);
    }
    if (float < 0.000000000000001) {
      break;
    }
    if (float < 1 / (2 * i)) {
      i *= 2;
      continue;
    }
    i += 1;
  }

  return resultArr;
};
