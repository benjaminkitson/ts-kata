import { deadAntCount } from ".";

describe("deadAntCount", function () {
  describe("Basic Tests", function () {
    it("Basic Test 1", () => {
      expect(deadAntCount("ant ant ant ant")).toBe(0);
    });

    it("Basic Test 2", () => {
      expect(deadAntCount(null)).toBe(0);
    });

    it("Basic Test 3", () => {
      expect(deadAntCount("ant anantt aantnt")).toBe(2);
    });

    it("Basic Test 4", () => {
      expect(deadAntCount("ant ant .... a nt")).toBe(1);
    });
  });
});
