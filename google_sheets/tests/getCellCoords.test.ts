import { assert } from "chai";
import { getCellCoords } from "..";

describe("getCellCoords", () => {
  it("correctly gets the cell coords from the inputted range string", () => {
    const result = getCellCoords("A1:B2");

    assert.deepEqual(result, [
      ["A", "1"],
      ["B", "2"],
    ]);
  });
});
