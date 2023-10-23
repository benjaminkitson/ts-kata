// https://www.codewars.com/kata/62c376ce1019024820580309

type CellCoords = [[string, string], [string, string]];

export const getCellCoords = (range: string): CellCoords => {
  const [firstCell, lastCell] = range.split(":");
  const [row1, ...col1Chars] = firstCell.split("");
  const [row2, ...col2Chars] = lastCell.split("");
  return [
    [row1, col1Chars.join("")],
    [row2, col2Chars.join("")],
  ];
};

/**
 * Find all cells within a range
 * Assumes range will always be a valid format
 * @param range - a string of form "cell1:cell2", such as "A1:C20"
 */
export const googleSheets = (range: string) => {
  const [firstCell, lastCell] = getCellCoords(range);

  const firstCellRowUnicodeInt = firstCell[0].charCodeAt(0);
  const lastCellRowUnicodeInt = lastCell[0].charCodeAt(0);

  const result = [];

  for (let i = parseInt(firstCell[1]); i <= parseInt(lastCell[1]); i++) {
    for (let j = firstCellRowUnicodeInt; j <= lastCellRowUnicodeInt; j++) {
      result.push(`${String.fromCharCode(j)}${i}`);
    }
  }

  return result;
};
