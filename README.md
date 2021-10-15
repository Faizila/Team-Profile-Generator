# Team-Profile-Generator

It's a command-line application.

# Description

* This is a Node.js command-line application that takes in information about employees on a software engineering team.

* This app based on user input dynamically generates an HTML webpage that displays each team member as a card with their name, role, ID, email, and other information specific to their role using the Inquirer module. 

* Team-Profile-Generator application demonstrates the use of Object-oriented programming (OOP) and Test-driven development (TDD) using jest module from Node.js.

# Table of Contents

* Built With
* Installation
* Usage
* License
* Contributors
* Testing
* Link
* Screenshots
* Video
* Questions

# Built With:

[Inquirer package](https://www.npmjs.com/package/inquirer)

# Installation

Run the following commands for installation:

```bash
npm init
```

```bash
npm install inquirer
```
# Usage

The application will be invoked by using the following command:

```bash
node index.js
```
The user is then prompted to choose what type of employee they would like to create first from the following options: Manager, Engineer or Intern.

The manager option requires the user to input the name, ID, email, and office number.

The engineer option requires the user to input the name, ID, email, and github username.

The intern option requires the user to input the name, ID, email, and school.

The user is then prompted to choose if they want to add another employee card by answering "Yes" or "No".

If user chooses "Yes", the employee type question appears and user goes through the same process again.

If user chooses "No", an HTML webpage is generated with all the employees selected based on user's input.

Watch video demonstration under video section.

# License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# Contributors

Faizila Amlani

# Testing

Install [Jest](https://www.npmjs.com/package/jest) for running the unit tests.

Run the following commands for testing:

```bash
npm run test
```

# Link

Refer to Video section for sample generated HTML page.

DEMO: 

# Screenshots


# Video

See a walkthrough video demonstrating the functionality of the application here:


DEMO: 

# Questions

If you have any other questions or comments you can contact me at:
   <br>
   My GitHub: https://github.com/Faizila
   <br>
   My Email : amlani.faizila@gmail.com
   <br>
   Issues: https://github.com/Faizila/Team-Profile-Generator/issues

