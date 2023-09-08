#Software Requirements

[REQUIREMENTS](https://github.com/EstandaresDeCalidadSW23/vikingos-analyser/issues/21#event-10289307088%20%22REQUIREMENTS%22 "REQUIREMENTS")

##Version 1.0
##• Define the MVP product
     Minimal: Contains only the essential features necessary to solve a problem or satisfy a specific user need. All non-critical functionality is removed to simplify early development.
     Viable: It is functional and usable. Although basic, the product must be effective enough to provide real value to users and fulfill its primary purpose.
     Product: It can be software, a mobile application, a website, a physical device or any other type of product or service that a company is developing.
A VARIABLE CANNOT BE USED WITHOUT BEING DECLARED[REQUIREMENTS](https://github.com/EstandaresDeCalidadSW23/vikingos-analyser/issues/21#event-10289307088 "REQUIREMENTS")
variable
my variable= 5; 0-1,000,000 (FROM ZERO TO A MILLION)

-#Variable is declared
variable, age=15
[a-zA-z0-9_]
Don't start with numbers
Variable age = 15; (For starters, you need to use the semicolon in our coding system “;”)
We check that age is equal to 18
If age equals = 18
-Print "He is 18 years old"
-Print "Let's go pistear"
-If it doesn't print "Tas chavito"
-Print "Better your heart"
• Requirements analysis
Identification of the specific parties: Begin by identifying all the interested parties that will be involved in the software project. This can include end users, managers, customers, domain experts, and other stakeholders.

Meetings and interviews: Hold meetings and interviews with stakeholders to gather information about their needs and expectations. Ask them about their goals, current problems, and how the software can help solve them.

Existing documentation: Review any existing documentation related to the project, such as technical specifications, user manuals, process flow diagrams, among others.
Use Case Analysis: Uses techniques such as use case analysis to understand how users will interact with the system. This helps to identify the necessary functions and features.

Requirements prioritization: Classifies the requirements based on their importance and priority. This is essential to define which features should be implemented first and which ones can be postponed.

Requirements validation: Share the requirements with interested parties for their review and validation. Make sure everyone agrees that the requirements capture their needs.

Detailed documentation: Document the requirements in a clear and detailed way. Use standard formats such as tables, diagrams, textual descriptions, etc. This will facilitate communication with the development team.
Requirements traceability: Establishes a traceability system to link requirements to use cases, tests, and other project artifacts. This helps ensure that all requirements are met.

Continuous validation: As the project progresses, continue to validate and adjust the requirements as necessary. It is common for changes to emerge as a deeper understanding of the problem and solutions are gained.

Final Approval: Get final approval from stakeholders once the requirements are complete and validated. This establishes a solid foundation for the development of the software.

Change Management: Implements a process to manage changes in requirements throughout the project life cycle. Changes must be properly evaluated and documented before being incorporated.

 LEXICAL ANALYSIS
 An error for each invalid symbol
 A button that generates the syntax or lexicon for itself in the error and also analyzes
 Example @IsNotValid line #5 or (Lines: lexical error). Also in error handling "A LOT OF ERRORS IN YOUR PROGRAM"
 Generate in the code when generating it properly that it says “Good Job. Your program is correct."


syntactic analysis
     Block structure: Verifies that the program is organized into blocks of code (such as functions or methods) in a logical and coherent manner. Each block must have a correct start and end syntax (for example, braces {} in C++, Java, JavaScript, etc.).

     Variable and function names: Make sure that variable and function names are descriptive and follow the naming conventions of the programming language used. Avoid special characters, blank spaces, and ambiguous names.

     Punctuation and operators: Check that operators and punctuation marks are used correctly. Make sure semicolons (or equivalent) are in place to end statements.

     Nesting and Indentation: Verifies that nesting of blocks and control structures is handled correctly and that indentation (indentation) is consistent. This makes the code easier to read.

     Parentheses and brackets: Make sure parentheses and brackets are used appropriately for grouping expressions and defining lists or arrays.

     Comments: Verify that the program includes clear, descriptive comments to explain the purpose of sections of code and important parts of the program.

     Strings and quotes: Make sure that strings are enclosed in quotes (single or double) and that there are no missing or mismatched quotes.

     Declarations and Assignments: Verifies that declarations and assignments are syntactically correct and that data types match where necessary.

     Control structures: Evaluate control structures (if, else, for, while, switch, etc.) to make sure they are correctly formed and nested according to the syntax of the language.

     Error handling: Check if the program properly handles exceptions or errors, including catching and handling exceptions when necessary.

     Imports and dependencies: Check imports or inclusions of external modules, libraries or packages, making sure they are done according to the language rules.

     Entry point: Make sure the program has a valid entry point, such as a main() function in many languages, from where execution starts.

 SEMANTIC ANALYSIS
     Data Types and Compatibility: Verifies that data types are used consistently and that operations are performed with compatible data types. Make sure that type conversions are proper and safe.

     Declarations and assignments: Evaluates that variables are declared and assigned correctly according to their use. Check that the assignments are consistent and that the variables are initialized before use.

     Variable scope and lifetime: Verifies that variables are declared in the proper scope and that their lifetime is correct. Avoid using variables outside of their scope or after their lifetime.

     Control structures and program flow: Make sure that the control structures (if, else, for, while, switch, etc.) are designed correctly and that the program flow follows the expected logic.

     Functions and Procedures: Verifies that functions and procedures are declared and used consistently. Check that parameters and return values are handled correctly.

     Memory management: In low-level languages, checks that memory management is proper and that there are no memory leaks or invalid memory access.

     Exception and error handling: Make sure the program handles exceptions and errors appropriately, including catching and handling exceptions when necessary.

     Logic and Math Operations: Verifies that logic and math operations are performed according to expected logic and that there are no overflows, division by zero, or similar errors.

     Behavior of data structures: Evaluates the behavior of data structures, such as arrays or lists, to ensure that they are used correctly and that there are no overflows, indexes out of range, etc.

     Interactions with the environment: If the program interacts with the environment, such as operating systems, files, or databases, verify that these interactions are handled correctly and that there are no security issues or unauthorized access.

     Optimization and performance: Evaluate the performance of the program to identify potential bottlenecks or inefficiencies in the code, and ensure it is optimized as needed.

     Peer Review and Testing: Conduct extensive peer reviews and tests to verify the behavior and functionality of the program from a semantic perspective.

##1.1. Product Features
The main functions that the system must provide are:
A HELP BUTTON
“UPLOAD WELL DOCUMENTED EXAMPLE”
     Design the user interface:
         Decide where to place the help button on your program's user interface. It can be a button on the toolbar, a link in a dropdown menu, or anywhere else that is visible and accessible to users.

     Create an icon or label for the help button:
         Design an icon or create a clear label indicating that it is the help button. A question mark icon (?) is a common choice to indicate help.

     Assign an action to the help button:
         Decide what action will be taken when users click the help button. You can choose to open a popup window, display a side panel, or redirect to a help web page.

    Implement help button functionality:
         In your program code, program the functionality that will be activated when the help button is clicked. The behavior may vary according to your needs and preferences. Some common options include:

             Pop-up window:
You can create a popup window with relevant help information, tips, or instructions. This can be a modal window or a standalone window.

             Side panel:
  You can display a side panel or slide-out panel containing help content, which will appear and disappear when the button is clicked.

             Redirection to a web page:
  If you have online documentation, you can open an embedded web browser or redirect users to a help web page.

     Create or collect help content:
         Prepare the help content that will be displayed when users click the help button. This may include descriptive text, images, videos, links to online resources, tutorials, or any other information that helps users understand and use your program effectively.

     Design the user experience:
         Make sure the user experience is intuitive and easy to follow. Help content should be clearly organized and accessible, and users should be able to close the pop-up or help panel easily.

     Tests and review:
         Extensive testing to ensure that the help button works correctly in different situations and platforms. Make sure your help content is accurate and helpful to users.

     Documentation and update:
         Keep help content updated as the program evolves. Add new documentation or update existing documentation as needed.

##•	EXECUTION
     Compilation/Interpretation:
         If the program is written in a compiled language (such as C++ or Java), make sure you compile it correctly. If it's an interpreted language (such as Python or JavaScript), check that the interpreter is installed and up to date.

     Environment Configuration:
         If the program requires specific environment settings (environment variables, network settings, databases, etc.), make sure they are set correctly.

     Initial tests:
         Perform initial run tests to verify that the program starts without fatal errors. This includes checking the loading of modules or libraries, connecting to databases, etc.

     Data entry:
         It provides the necessary input data to the program, either through files, the command line, web forms, or other input sources, as designed.

     Parameter Verification:
         Verifies that the parameters passed to the program are correct and in the proper format. Make sure there are no outliers or input errors.

     Program Execution:
         Run the program following the steps and workflows provided. Make sure that operations go as planned and that there are no unexpected errors.

     Registration and Control of Errors:
         Implement an error logging system to capture and log any problems or exceptions that occur during execution. This is essential for diagnostics and debugging.

     Performance Tracking:
         Monitor the performance of the program to make sure there are no performance issues, such as slow response times or excessive use of system resources.

     Functional testing:
         Performs functional tests to verify that the program meets its objectives and produces the expected results.

     Integration testing:
         If the program integrates with other systems or components, perform integration testing to ensure that all parts work together in a consistent manner.

     Security Tests:
         Evaluates the security of the program to identify possible vulnerabilities and security problems. This is especially important if the program handles sensitive data or interacts with external systems.

     Documentation:
         Keep the documentation of the program updated, including user manuals, installation guides and detailed descriptions of its operation.

     Deployment:
         If the program runs in a production environment, it follows a controlled and documented deployment procedure.

     Continuous monitoring:
         After the initial run, establish a continuous monitoring system to detect problems and errors in real time.

     Update Management:
         Implements an update management process to apply security patches and software enhancements over time.

##1.2. design constraints
     Bug Management and Improvements:
         Address bugs and issues identified during execution, and plan further improvements as needed.

Example of a constraint:
When the person makes a mistake, clearly show the mistake "and tell why they made a mistake"

##3 Generate a backlog
     Identify the project and the team: Before creating a backlog, make sure you are clear about the goal of the project and that you have a team that will work on it. The team can include developers, designers, testers, and other necessary roles.

     Collect requirements and objectives:
It brings together all interested parties, such as customers, end users, and the development team, to identify and discuss the requirements and objectives of the project. This will help you understand what should be included in the backlog.

     Estimate:
The development team must estimate the effort required to complete each user story. This can be done using story points, labor hours, or any other unit of measurement the team prefers.

     Create the backlog:
Organize the prioritized user stories in an ordered list, which will be your backlog. The backlog should include a brief description of each story, its priority, and its effort estimate.

     Add tasks and sub-tasks: For larger user stories, break them down into smaller tasks and sub-tasks. This makes it easy to plan and track progress.

     Update regularly: The backlog is not static; it evolves as more information is acquired and priorities change. Update the backlog on a regular basis based on user feedback, changes in requirements, and project progress.

     Sprint planning:
If you are using Scrum, select a set of user stories from the backlog to include in a sprint. The sprint backlog becomes the working set for the next sprint.

     Monitoring and management:
Use project management tools like Kanban boards or issue tracking software to track user stories and team progress.

##4 BUGS
     Clear and complete specifications:
         Requirement: Demands that the project requirements are clearly, completely and unambiguously documented. This includes detailed feature specifications, business rules, and technical requirements.

         Benefit: A clear understanding of what to build helps avoid misunderstandings and errors in design and implementation.

         Requirement: Establishes rigorous testing at all stages of development, from unit testing to customer acceptance testing.

         Benefit:
Testing identifies and fixes problems before they reach end users.

     Clean and maintainable code:

         Request:
It requires that the code be clean, follow coding standards, and adhere to good programming practices.

         Benefit: Clean code is easier to read, maintain, and less prone to errors.

     Code review:

         Requirement: Implement regular code reviews by other team members to detect and fix bugs.

         Benefit:
  Code review can catch problems that the original author may have missed.
     Test Automation:

         Requirement: Use test automation tools to perform automatic regression testing on each new version of the software.

         Benefit:
Test automation helps ensure that fixes and enhancements don't introduce new bugs.
     Version control and issue tracking:
         Request:
It uses a version control system to manage source code and an issue tracking system to keep track of known bugs and planned improvements.

         Benefit: These systems allow efficient problem and change management, avoiding the loss of crucial information.

     Appropriate documentation:
         Requirement: Demands that the development team documents code, procedures, and design decisions appropriately.

         Benefit: Documentation makes the software easier to understand and maintain.

     Safety tests:
         Requirement: Perform regular security testing to detect and fix vulnerabilities that can be exploited by attackers.
         
         Benefit: Protects the software against possible threats and attacks.

     Team Training:
         Requirement: Provide ongoing training to the development team to keep them abreast of best practices and new technologies.

##6 ENHANCEMENTS
     Clear and detailed description:
         Provide a clear and detailed description of the improvement being sought. This should include the reason behind the improvement and how it is expected to benefit the user or the business.

     Priority and value:
         Ranks the improvement based on its priority and value. How important is this improvement compared to other tasks in the backlog? What benefits will it bring?

     Technical specifications:
         Provides technical details on how the improvement should be implemented. This may include changes to architecture, technology, or infrastructure.

     Impact on existing system:
         Evaluate and document how the improvement will affect the existing system. Will there be interactions with other functionalities or modules? Can there be negative impacts?

     Test requirements:
         Define clear acceptance criteria so that the development team can verify that the improvement has been implemented correctly.

     Effort estimate:
         Estimate the effort required to implement the improvement. This can include the time required, the resources involved, and any impact on existing deadlines.

##8 TECH DEBT
     Technical description:
         Provide a clear and detailed description of the technical debt that needs to be addressed. This may include specific areas of code, architecture, or design that require attention.

     Justification:
         Explain why this technical debt is important to address. How does it affect software quality, performance, security or maintainability?

     Impact on the project:
         Document the current or potential impact of technical debt on the project. Has it caused bugs or problems in the past? Is it holding back future development?

     Priority:
         Classifies technical debt based on its priority. Some technical debts may be critical and need to be addressed immediately, while others may be less urgent.

     Effort estimate:
         Estimate the effort required to address and resolve technical debt. This can include time required, resources needed, and any impact on project timelines.

     Action plan:
         Describes how technical debt will be addressed. This may include code refactoring, reassessment of technical decisions, or implementation of best practices.

     Criteria of acceptance:
         Defines the specific criteria that must be met to consider that the technical debt has been satisfactorily resolved.

     Communication and documentation:
         Make sure the team is informed about the technical debt and the actions planned to address it. Document changes made and resolution processes.

     Change management:
         Integrates technical debt resolution into the project change management process. This may require stakeholder approval before performing tech debt tasks.

     Follow-up and review:
         Once technical debt has been addressed, perform regular monitoring and review to assess whether issues have been resolved and whether there have been improvements to the technical quality of the software.

     continuing education:
         Encourages continuous education of the development team to avoid accumulating new technical debt in the future. This may include training in good development practices.

SPIKE research (they are light tasks either to conclude the topic or to say “I would like to implement this new prime voult”)

##2. Specific requirements
The following are the functional requirements that the system must implement. All requirements specified below are pending approval.
Lexicon Program version 1.0
The Lexicon program allows syntactic and semantic analysis.

Requirements
The description of the different requirements to be implemented in the software is written below.
• The written message must not begin with numbers.
• The numbers accepted by the systems must be between 0 - 1,000,000 (1 million), and these cannot be decimals, only whole numbers.

##3. Documentation requirements

##3.1. User manual
A manual should be produced that specifies and exemplifies the main functionalities of the system. This manual will be a means by which users can learn to use the system, so it must be done for this purpose.

##3.2. Online help
The client or user stated that they want any type of online help.

##3.3. business rule
LAW IN THE SYSTEM OF HOW THE BUSINESS WORKS NAME CHANGE OPERATIONS, INACTIVE ACCOUNT IS A RULE OF BUSINESS This section specifies whether the software system will contain instructions for installation and configuration. Also, whether to include the typical Readme file, which may include What's New in the release, backward compatibility discussion, documentation of known bugs, and workarounds.