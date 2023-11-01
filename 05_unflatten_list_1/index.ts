// https://www.codewars.com/kata/57e2dd0bec7d247e5600013a

const deflatten = (list: number[]) => {
  const result: (number | number[])[] = [];
  let temp: number[] = [];
  let counter = 0;
  const logInfo = (i: number) => {
    console.log(`${i + 1}:`, counter, temp, result);
    console.log("---------------");
  };
  console.log(list);
  console.log("---------------");
  list.forEach((num, i) => {
    if (counter === 0 && num < 3) {
      if (temp.length) {
        result.push(temp);
        temp = [];
      }
      result.push(num);
      logInfo(i);
      return;
    }
    if (counter !== 0) {
      temp.push(num);
      counter -= 1;
      logInfo(i);
      return;
    }
    if (counter === 0 && num >= 3) {
      counter = num;
      if (temp.length) {
        result.push(temp);
      }
      temp = [];
      temp.push(num);
      counter -= 1;
      logInfo(i);
    }
    // console.log(result, temp, counter);
  });
  if (temp.length) {
    result.push(temp);
  }
  console.log("---------------");
  return result;
};

console.log(
  deflatten([1, 3, 1, 2, 2, 1, 2, 4, 3, 2, 5, 6, 5, 1, 6, 2, 3, 3, 1, 1, 2])
);
