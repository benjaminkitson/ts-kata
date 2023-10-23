// https://www.codewars.com/kata/529b418d533b76924600085d

export const camelToSnake = (input: string | number) => {
  const str = input.toString();

  let currentWord = "";

  const chars = str.split("");
  const words: string[] = [];

  const isUpperCase = (s: string) => s.toUpperCase() === s;
  const isNumber = (s: string) => !!parseInt(s);

  chars.forEach((char, i) => {
    currentWord += char.toLowerCase();
    const nextChar = chars[i + 1];
    if (!nextChar || (isUpperCase(nextChar) && !isNumber(nextChar))) {
      words.push(currentWord);
      currentWord = "";
    }
  });

  return words.join("_");
};
