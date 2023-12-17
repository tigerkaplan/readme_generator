const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "username",
    message: "What is your GitHub username?"
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?"
  },
  {
    type: "input",
    name: "title",
    message: "What is your project title?"
  },
  {
    type: "input",
    name: "Description",
    message: "Pease write a short description of your project:"
  },
  // {
  //   type: "input",
  //   name: "Table of Contents",
  //   message: ""
  // },
  {
    type: "input",
    name: "Installation",
    message: "What command should be run to install the project?"
  },
  {
    type: "input",
    name: "Usage",
    message: "What is the project usage for?"
  },
  {
    type: "list",
    name: "License",
    message: "What kind of license should the project have?",
    choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        
  },
  {
    type: "input",
    name: "Contributing",
    message: "Who are the contributors of this projects? (Github username or email)"
  },
  {
    type: "input",
    name: "Tests",
    message: "What command should be run to test the project?"
  },
  {
    type: "input",
    name: "Questions",
    message: "Do you have any question about the project?"
  },
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log ("Generating Professional README.md file ... ");
    writeToFile("./utils/README.md", generateMarkdown ({ ...responses }));
    });
}

// function call to initialize program
init();
