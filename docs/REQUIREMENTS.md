###Vikings-Analyzer-V-1.0

##- Define the MVP product

      -Minimal: Contains only the essential features needed to solve a problem or satisfy a specific user need. All non-critical functionality is removed to simplify initial development.

      -Viable: It is functional and usable. Although basic, the product must be effective enough to provide real value to users and fulfill its primary purpose.

      -Product: It can be software, a mobile application, a website, a physical device, or any other type of product or service that a company is developing.

Comments (To be accepted with):

-Comment Review: Examines comments within the source code of the program. Comments often provide important information about software features, functionality, and dependencies. Look for comments that explicitly describe the requirements of the program.

Variables (Declaration):

-Identify global variables: start by looking for global variables, that is, variables that are declared outside of any function or method. These variables often indicate settings or values that are fundamental to the program.

-Analyze local variables: Next, review the local variables declared inside functions or methods. These variables can provide clues about the operations the program performs and how data is handled.

Variable types: Examine the data types of the variables. For example, if you see variables of type "file", "socket" or "database" declared, this may indicate specific dependencies in the software.

-Variable values: Pay attention to the values assigned to variables. This may reveal information about file paths, IP addresses, database names or other important settings.

Remove dropdown:
-Removing an item such as a dropdown from a program can have implications for software requirements. Here are some of the possible 

requirements you should be aware of when removing a dropdown from a program:

-Source code review: Before removing the dropdown, review the program's source code to understand how the dropdown is used and what functions or features depend on it. This will help you identify any necessary code changes.

-User requirements: If users are accustomed to using the dropdown to select options, it is important to consider how they will adapt to the new workflow or interface. Training or communications may be required to inform users of the change.

-User interface requirements: Eliminating the dropdown may require reorganization of the user interface. You will need to design a new interface to reflect the removal of the element and ensure that it is easy to use and meets the objectives of the program.

-Add "Analyze" button:
Requirements you should consider when adding an "Analyze" button to your program:

-User interface (UI) design:

Design and add the "Analyze" button to the UI in a manner consistent with the existing design.
Define the location of the button, its size, color and text label so that it is intuitive for users.
Ensure that the user interface is responsive and adapts to different screen sizes.

Functionality of the "Analyze" button:

Determine what actions or tasks will be performed when the "Analyze" button is clicked.
Specify what data or information will be collected, processed or displayed as a result of the analysis action.

Input requirements:

Define the input requirements for the analysis function. What data or information does the program need to perform the analysis?
Specify how this data will be entered (e.g., via forms, file upload, item selection, etc.).

Data processing:

Describe the analysis process in detail. What algorithms or methods will be used to perform the analysis?
Establish performance requirements to ensure that the analysis process is efficient and does not cause significant delays in the application.

Add line #'s:

Consider when adding line numbers to your program:

User interface (UI) design:

Design and add line numbers so that they are visible and readable in the UI.
Allow line numbers to conform to the user-selected font size or color theme, if possible.

Customization:

Provide the option to enable or disable line numbers in the user interface to accommodate user preferences.
Allow customization of the appearance of line numbers (e.g., font size, color, style).

Positioning of line numbers:

Decide whether line numbers will be displayed on the left or right margin of the code.
Ensure that the line numbers align correctly with the corresponding lines of code.

User interaction:

Allow users to click on line numbers to quickly navigate to specific lines of code.
Implement an efficient way to highlight the current or selected line of code in response to user interaction with line numbers.

Below, I will give you an example of what I am asking for:

A VARIABLE CAN'T BE USED WITHOUT BEING DECLARED
variable
my variable= 5; 0-1.000.000 (ZERO TO ONE MILLION)
-#Variable is declared
variable, age=15
[a-zA-z0-9_]
Do not start with numbers
Variable age = 15; (To begin with, you must use the semicolon in our coding system ";")
We check that the age is equal to 18.
If the age is = 18
-Print "He is 18 years old"
-Print "Let's go pistear".
-If it doesn't print "Tas chavito"
-Print "Better your heart"
- Requirements analysis

 LEXICAL ANALYSIS

 An error for each invalid symbol
 A button that generates by itself the syntax or lexicon in the error and also analyzes
 Example @IsNotValid line #5 or (Lines: lexical error). Also in error handling "MANY ERRORS IN YOUR PROGRAM".
 Generate in the code on successful generation that says "Good job. Your program is correct."
Parsing

      Error handling: check if the program handles exceptions or errors properly, including catching and handling exceptions when necessary.

Imports and dependencies: check imports or inclusions of external modules, libraries or packages, making sure they are done according to the rules of the language.

      Entry point: ensure that the program has a valid entry point, such as a main() function in many languages, from which execution begins.

 SEMANTIC ANALYSIS
      Functions and procedures: verify that functions and procedures are declared and used consistently. Check that parameters and return values are handled correctly.

      Memory management: In low-level languages, check that memory management is adequate and that there are no memory leaks or invalid memory accesses.

Exception and error handling: ensure that the program handles exceptions and errors appropriately, including catching and handling exceptions when necessary.

      Logical and mathematical operations: verify that logical and mathematical operations are performed according to expected logic and that there are no overflows, division by zero or similar errors.

       Peer review and testing: perform extensive testing and peer review to verify program behavior and functionality from a semantic perspective.
       
##Product features

The main features to be provided by the system are:
A HELP BUTTON
"UPLOAD WELL-DOCUMENTED EXAMPLE"

      Design the user interface:
          Decide where to place the help button in the user interface of your program. It can be a button on the toolbar, a link in a drop-down menu, or any other place that is visible and accessible to users.

      Create an icon or label for the help button:

          Design an icon or create a clear label that indicates that it is the help button. A question mark icon (?) is a common choice to indicate help.

      Assign an action to the help button:

          Decide what action will be taken when users click the help button. You can choose to open a pop-up window, display a side panel, or redirect to a help web page.

Implement the help button functionality:

          In your program code, program the functionality that will be triggered when the help button is clicked. The behavior may vary depending on your needs and preferences. Some common options include:

      Create or collect help content:

          Prepare help content to be displayed when users click the help button. This can include descriptive text, images, videos, links to online resources, tutorials, or any other information that will help users understand and use your program effectively.

      Design the user experience:

          Make sure the user experience is intuitive and easy to follow. Help content should be clearly organized and accessible, and users should be able to close the pop-up window or help panel easily.

Testing and review:

          Thorough testing to ensure that the help button works correctly in different situations and platforms. Make sure your help content is accurate and useful to users.

      Documentation and updating:

          Keep help content up to date as the program evolves. Add new documentation or update existing documentation as needed.
##- PERFORMANCE

      Compilation/Interpretation:

          If the program is written in a compiled language (such as C++ or Java), be sure to compile it correctly. If it is an interpreted language (such as Python or JavaScript), verify that the interpreter is installed and up-to-date.

##1.2. design constraints

      Bug and enhancement management:

          Troubleshoot bugs and problems identified during execution and plan additional enhancements as needed.

Example constraint:

When the person makes a mistake, clearly show them the error "and tell them why they made a mistake."
##3 Generate a backlog
      Identify the project and the team: before creating a backlog, make sure you are clear about the goal of the project and have a team that will work on it. The team may include developers, designers, testers and other necessary roles.

      Tracking and management:

Use project management tools such as Kanban boards or issue tracking software to track user stories and team progress.

##4 ERRORS

      Clear and complete specifications:

          Requirement: Requires that project requirements be clearly, completely and unambiguously documented. This includes detailed role specifications, business rules and technical requirements.

          Requirement: Requires the development team to document code, procedures and design decisions appropriately.

          Benefit: Documentation makes the software easier to understand and maintain.

      Security testing:

##6 IMPROVEMENTS.

      Clear and detailed description:

Provide a clear and detailed description of the improvement being sought. This should include the reason for the enhancement and how it is expected to benefit the user or the business.

      Priority and Value:

          Rank the improvement according to its priority and value. How important is this improvement compared to other pending tasks? What benefits will it bring?

            Test requirements:
          Define clear acceptance criteria so that the development team can verify that the enhancement has been implemented correctly.

##8 TECHNOLOGICAL DEBT

      Technical Description:

          Provide a clear and detailed description of the technical debt that needs to be addressed. This may include specific areas of code, architecture, or design that require attention.

      Justification:

          Explain why it is important to address this technical debt. How does it affect the quality, performance, security, or maintainability of the software?

      Project Impact:

          Document the current or potential impact of the technical debt on the project. Has it caused bugs or problems in the past? Is it holding back future development?
SPIKE investigation (these are light tasks to either wrap up the issue or say "I would like to implement this new prime volult").

##2. Specific requirements.
The following are the functional requirements that the system must implement. All requirements specified below are pending approval.

Lexicon program version 1.0

The Lexicon program allows for syntactic and semantic analysis.
Requirements
Next, the description of the different requirements to be implemented in the software is written.
- The written message must not start with numbers.
- The numbers accepted by the systems must be between 0 - 1,000,000 (1 million), and these cannot be decimals, only whole numbers.

##3. Documentation requirements

##User's manual

A manual must be prepared that specifies and exemplifies the main functionalities of the system. This manual will be a means by which users can learn how to use the system, so it should be prepared for this purpose.

##3.2. On-line help

The client or user stated that he/she wants any kind of online help.

##3.3. of business rules

LAW IN BUSINESS OPERATION SYSTEM NAME CHANGE OPERATIONS, INACTIVE ACCOUNT IS A BUSINESS RULE This section specifies whether the software system will contain instructions for installation and configuration. In addition, whether to include the typical readme file, which may include what's new in the release, discussion of backward compatibility, documentation of known bugs, and workarounds.
