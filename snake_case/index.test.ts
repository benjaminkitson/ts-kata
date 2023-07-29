import { camelToSnake } from ".";

describe("camelToSnake", () => {
  it("converts basic camel cased string to snake case", () => {
    const camelString = "TestString";
    const snakeString = "test_string";

    expect(camelToSnake(camelString)).toBe(snakeString);
  });

  it("treats numbers as lower case letters", () => {
    const camelString = "Test1String1";
    const snakeString = "test1_string1";

    expect(camelToSnake(camelString)).toBe(snakeString);
  });

  it("returns stringified number when integer supplied", () => {
    const num = 1;

    expect(camelToSnake(num)).toBe("1");
  });
});
