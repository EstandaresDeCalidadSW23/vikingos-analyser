function analyzeSyntax(code) {
  try {
    // Attempt to parse the code using the JavaScript engine
    new Function(code);
  } catch (e) {
    // If an error is thrown, check if it matches any of the expected errors
    const error = e.toString();
    if (error.includes("SyntaxError: Unexpected token ')'")) {
      return "Error: Missing opening parenthesis";
    } else if (error.includes("SyntaxError: Unexpected token ':'")) {
      return "Error: Missing closing parenthesis";
    } else if (error.includes("SyntaxError: Unexpected token >")) {
      return "Error: Missing variable for comparison";
    } else if (error.includes("SyntaxError: Unexpected token else")) {
      return "Error: 'else' must be followed by parentheses";
    } else {
      // If the error is not recognized, return a generic error message
      return "Syntax error: " + error;
    }
  }
  // If no errors are thrown, return success
  return "Syntax analysis successful";
}

export default analyzeSyntax;
