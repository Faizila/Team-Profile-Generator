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

* Uses the [Inquirer package](https://www.npmjs.com/package/inquirer).

* Uses the [Jest package](https://www.npmjs.com/package/jest) for a suite of unit tests.

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
The user is then prompted with the team manager questions that requires the user to input the name, ID, email, and office number.

User is then prompted to choose what type of employee they would like add to the team from the following options: Engineer or Intern.

The engineer option requires the user to input the name, ID, email, and github username.

The intern option requires the user to input the name, ID, email, and school.

The user is then prompted to choose if they want to add another employee card by answering "Y" or "N".

If user chooses "Y-Yes", the employee type question appears and user goes through the same process again.

If user chooses "N-No", an HTML webpage is generated with all the employees selected based on user's input.

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
Refer to Video section for a walkthrough video on how to run test.

# Link

Refer to Video section for walkthrough video links on functionality and unit testing.

# Screenshots

![generatedteam](https://user-images.githubusercontent.com/78191579/137752242-5fa07918-8760-4e90-8966-47ad20d93f66.JPG)
![bash-team](https://user-images.githubusercontent.com/78191579/137752219-c45a7fbd-4ba5-4044-a0c4-123744def910.JPG)
![validate](https://user-images.githubusercontent.com/78191579/137801376-e99de769-b5fb-4608-874b-e579542bc811.JPG)
![test](https://user-images.githubusercontent.com/78191579/137602190-0c06b8d6-5f14-44c0-892a-753fc9a0d499.JPG)

# Video

See a walkthrough video demonstrating the functionality of the application here:
<br>
https://github.com/Faizila/Team-Profile-Generator/blob/main/assets/GIF/functionality.gif
<br>
https://github.com/Faizila/Team-Profile-Generator/blob/main/assets/GIF/email.gif

See a walkthrough video demonstrating how to run test here:
<br>
https://github.com/Faizila/Team-Profile-Generator/blob/main/assets/GIF/test.gif 

# Questions

If you have any other questions or comments you can contact me at:
   <br>
   My GitHub: https://github.com/Faizila
   <br>
   My Email : amlani.faizila@gmail.com
   <br>
   Issues: https://github.com/Faizila/Team-Profile-Generator/issues

