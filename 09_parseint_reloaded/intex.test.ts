import { parseIntCopy } from ".";

describe("parseIntCopy", function () {
  describe("Basic Tests", function () {
    it("Basic Test 1", () => {
      expect(parseIntCopy("one")).toBe(1);
    });

    it("Basic Test 2", () => {
      expect(parseIntCopy("twenty")).toBe(20);
    });

    it("Basic Test 3", () => {
      expect(parseIntCopy("twenty-one")).toBe(21);
    });

    it("Basic Test 4", () => {
      expect(parseIntCopy("one hundred twenty-one")).toBe(121);
    });

    it("Basic Test 5", () => {
      expect(parseIntCopy("five hundred and fifty-five")).toBe(555);
    });

    it("Basic Test 6", () => {
      expect(parseIntCopy("one thousand seven hundred and three")).toBe(1703);
    });

    it("Basic Test 7", () => {
      expect(parseIntCopy("two thousand nine hundred and thirty")).toBe(2930);
    });

    it("Basic Test 8", () => {
      expect(parseIntCopy("sixty thousand four hundred and fifty-six")).toBe(
        60456
      );
    });

    it("Basic Test 9", () => {
      expect(
        parseIntCopy("eighty-two thousand four hundred and fifty-six")
      ).toBe(82456);
    });

    it("Basic Test 10", () => {
      expect(
        parseIntCopy(
          "one hundred and twenty-one thousand four hundred and fifty-six"
        )
      ).toBe(121456);
    });

    it("Basic Test 11", () => {
      expect(
        parseIntCopy(
          "seven hundred and ninety-nine thousand six hundred and one"
        )
      ).toBe(799601);
    });

    it("Basic Test 12", () => {
      expect(parseIntCopy("one million")).toBe(1000000);
    });

    it("Basic Test 13", () => {
      expect(parseIntCopy("one thousand")).toBe(1000);
    });

    it("Basic Test 14", () => {
      expect(parseIntCopy("two hundred thousand")).toBe(200000);
    });
  });
});
