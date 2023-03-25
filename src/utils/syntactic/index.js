import {
  messageErrorMissingCurlyBracket,
  messageErrorMissingOpeningCurlyBracket,
  messageErrorMissingOpeningParenthesis,
  messageErrorMissingParenthesis,
  messageSyntaxAnalysisSuccessful,
} from "..";

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

  for (const match of matches) {
    const kind = Object.keys(match.groups).find(
      (key) => match.groups[key] !== undefined
    );
    const value = match.groups[kind];
    if (kind === "NUMBER") {
      result.push(parseInt(value));
    } else if (kind !== "WHITESPACE") {
      result.push(value);
    }
  }

  return result;
}

function parseCode(input) {
  const stack = [];

  for (let i = 0; i < input.length; i++) {
    const token = input[i];

    if (token === "(" || token === "{") {
      stack.push(token);
    } else if (token === ")") {
      if (stack.length === 0 || stack[stack.length - 1] !== "(") {
        return messageErrorMissingOpeningParenthesis;
      }
      stack.pop();
    } else if (token === "}") {
      if (stack.length === 0 || stack[stack.length - 1] !== "{") {
        return messageErrorMissingOpeningCurlyBracket;
      }
      stack.pop();
    }
  }

  if (stack.length > 0) {
    if (stack[stack.length - 1] === "(") {
      return messageErrorMissingParenthesis;
    } else if (stack[stack.length - 1] === "{") {
      return messageErrorMissingCurlyBracket;
    }
  }

  return messageSyntaxAnalysisSuccessful;
}

function analyzeSyntax(text) {
  const result = tokenize(text);
  const syntaxResult = parseCode(result);
  return syntaxResult;
}

export default analyzeSyntax;
