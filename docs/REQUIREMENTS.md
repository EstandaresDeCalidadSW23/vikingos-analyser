# Vikingos Analyzer V1.0

## MVP

- The reserved word to declare a variable is: `variable`.

- The words reserved for writing an `if`-`else` in code are: `si`-`sino`.

- Additionally, to write code inside an `if`-`else`, you must begin with a hyphen (`-`) followed by a space.

- The word reserved for printing on the screen is: `imprimir`.

- A variable must be declared first, before putting the name of the variable, since a variable cannot be used without having been declared.

- To write a comment it is necessary to start with a `#`.

- They should only accept numbers between `0` to `1,000,000` (One million) in a variable, thus not accepting negative numbers.

- The variables must be able to accept letters from A to Z (both lowercase and uppercase), and numbers from 0 to 9.

- Variables should not start with numbers.

- When ending the result of a variable, it must end with a semicolon (`;`).

- If there are no errors in the code written by the user at the time of clicking the "Analyze" button, then the success message `"Good job. Your program is Correct"` should be displayed.

- If the code written by the user has a problem when clicking the "Analyze" button, then an error message should be displayed that says: `"There were errors in your program."`

- If there are errors in both the lexical part and the syntactic part, the errors in the lexical part must appear first, and the errors in the syntactic part should not be shown if there are any. Only if there were no errors in the lexical part, then the syntactic errors could be shown.

- When showing errors in the lexical part, for example, it must be shown in which line of the code the error is found.

```
Example:

Lexical Error:
5 @ is not valid.
```

Where the number 5 is the line of code where the error is, and the "@" is invalid.

Additionally, the error must be displayed for each invalid symbol.

## Visual Part

- Remove dropdown (choice between lexical and syntactic analyzer).

- Add "Analyze" button (thus unifying the lexical and syntactic analyzer into a single button so that both analyzers work together and not separately).

- Add line number when writing code in the main program box.

- To display success messages, the color green will be used, and for error messages, the color red will be used.

- For the code that the user writes in the main box of the program, colors must be used (these are up to the designer's choice).

- Points and commas are not allowed, no decimals, or separations between the numbers to be entered.
