import { operators } from "..";

function tokenize(code) {
  // Define the regular expressions for each token type
  const tokens = [
    ["NUMBER", /\d+/],
    ["OPERATOR", /[+\-*/%^]/],
    ["COMPARISON", /[><]=?|==|!=/],
    ["IDENTIFIER", /[a-zA-Z_]\w*/],
    ["LEFT_PAREN", /\(/],
    ["RIGHT_PAREN", /\)/],
    ["LEFT_BRACE", /\{/],
    ["RIGHT_BRACE", /\}/],
    ["WHITESPACE", /\s+/],
  ];

  // Combine the regular expressions into a single pattern
  const pattern = tokens
    .map(([name, regex]) => `(?<${name}>${regex.source})`)
    .join("|");

  // Use the pattern to find all matches in the code
  const matches = code.matchAll(new RegExp(pattern, "g"));

  // Convert the matches into an array of tokens
  const result = [];
  let display = "";

  for (const match of matches) {
    const kind = Object.keys(match.groups).find(
      (key) => match.groups[key] !== undefined
    );
    const value = match.groups[kind];
    if (kind === "NUMBER") {
      display += " " + value;
      result.push(parseInt(value));
    } else if (kind === "LEFT_BRACE") {
      display += " entonces";
      result.push(value);
    } else if (kind === "OPERATOR" || kind === "COMPARISON") {
      display += " " + operators[value];
      result.push(value);
    } else if (kind === "IDENTIFIER") {
      const item = operators[value] ?? value;
      display += " " + item;
      result.push(value);
    } else if (kind !== "WHITESPACE") {
      result.push(value);
    }
  }

  return { result, display: display.trim() };
}

const lexico = (text) => {
  const { result, display } = tokenize(text);
  return {
    display,
    tokens: result,
  };
};

export default lexico;
