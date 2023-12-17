const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "username",
    message: "Please provide your GitHub username:"
  },
  {
    type: "input",
    name: "email",
    message: "Kindly share your email address:"
  },
  {
    type: "input",
    name: "link",
    message: "What is the URL where the deployed application can be accessed?"
  },
  {
    type: "input",
    name: "title",
    message: "Enter the title of your project:"
  },
  {
    type: "input",
    name: "description",
    message: "Could you describe your project briefly?"
  },
  {
    type: "input",
    name: "screenshot",
    message: "Could you provide the relative path to an image you'd like to use as the project's screenshot?"
  },
  {
    type: "input",
    name: "Installation",
    message: "What commands should be executed to install your project?"
  },
  {
    type: "input",
    name: "Usage",
    message: "For what purposes is your project intended to be used?"
  },
  {
    type: "list",
    name: "License",
    message: "Which license type is associated with your project?",
    choices: ['None','GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
  },
  {
    type: "input",
    name: "Contributing",
    message: "Please specify the contributors to this project (GitHub usernames or emails):"
  },
  {
    type: "input",
    name: "Tests",
    message: "How can one test your project?"
  },
  {
    type: "input",
    name: "Questions",
    message: "Do you have any specific questions regarding the project?"
  },
];


// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((responses) => {
    console.log ("Generating Professional README.md file... ");
    writeToFile("./output/README.md", generateMarkdown ({ ...responses }));
    });
}

// function call to initialize program
init();
