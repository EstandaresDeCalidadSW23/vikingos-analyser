import lexical from "./utils/lexical";

describe("app", () => {
  test("example1", () => {
    expect(1).toBe(1);
  });
});

describe("lexical", () => {
  test("tokens1", () => {
    const input = lexical("else ( num > 7 ){");
    console.log(input);
    expect(input.tokens).toStrictEqual(["else", "num", "(", ">", 7, ")", "{"]);
  });
  test("tokens2", () => {
    const input = lexical("if (num >7) {");
    console.log(input);
    expect(input.tokens).toStrictEqual(["if", "(", "num", ">", 7, ")", "{"]);
    expect(input.display).toBe("si num es mayor que 7 entonces");
  });
  test("tokens3", () => {
    const input = lexical("if(>  7) {");
    console.log(input);
    expect(input.tokens).toStrictEqual(["if", "(", ">", 7, ")", "{"]);
  });
});

// describe("syntactic", () => {});
