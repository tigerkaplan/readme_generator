const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "username",
    message: "GitHub username:"
  },
  {
    type: "input",
    name: "email",
    message: "GitHub email address:"
  },
  {
    type: "input",
    name: "deployment",
    message: "Deployment:"
  },
  {
    type: "input",
    name: "link",
    message: "Demo:"
  },
  {
    type: "input",
    name: "repository",
    message: "GitHub repository:"
  },
  {
    type: "input",
    name: "title",
    message: "Project title:"
  },
  {
    type: "input",
    name: "description",
    message: "Brief project description :"
  },
  {
    type: "input",
    name: "screenshot",
    message: "Project images / screenshot"
  },
  {
    type: "input",
    name: "installation",
    message: "Required installation/s:"
  },
  {//Project language
    type: "input",
    name: "require",
    message: "Project dependencies/language:",
  },
  {
    type: "input",
    name: "usage",
    message: "Project usage/purpose:"
  },
  {//Project license information
    type: "list",
    name: "license",
    message: "Project license:",
    choices: ['None','GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
  },
  {
    type: "input",
    name: "contribute",
    message: "Contributor's GitHub username/s:"
  },
  {
    type: "input",
    name: "tests",
    message: "Project tests:"
  },
  {
    type: "input",
    name: "questions",
    message: "Questions:"
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
