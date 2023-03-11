import lexical from "./utils/lexical";
import syntactic from "./utils/syntactic";

describe("app", () => {
  test("example1", () => {
    expect(1).toBe(1);
  });
});

describe("lexical", () => {
  test("tokens1", () => {
    const input = lexical("if ( num > 7 )");
    expect(input.display).toBe("si num es mayor que 7");
  });
  test("tokens2", () => {
    const input = lexical("if (num >7) {");
    expect(input.display).toBe("si num es mayor que 7 entonces");
  });
  test("tokens3", () => {
    const input = lexical("if(>  7) {");
    expect(input.display).toBe("si es mayor que 7 entonces");
  });
  test("tokens4", () => {
    const input = lexical("if (num < 7 ) {");
    expect(input.display).toBe("si num es menor que 7 entonces");
  });
  test("tokens5", () => {
    const input = lexical("if(x<7){x=x+1}else{x=x+2}");
    expect(input.display).toBe(
      "si x es menor que 7 entonces x es igual a x suma 1 otro entonces x es igual a x suma 2"
    );
  });
});

describe("syntactic", () => {
  test("ie1", () => {
    const input = syntactic("if(x<7){x=x+1}else{x=x+2}");
    expect(input).toBe("Syntax analysis successful");
  });
  test("ie2", () => {
    const input = syntactic("ifx<7){x=x+1}else{x=x+2}");
    expect(input).toBe("Error: Missing opening parenthesis");
  });
});
