// a license badge
function licenseBadge(license) {
  if (license !== "none") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
  }
  return "";
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${licenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
* [Description](#description)
* [Deployment](#deployment)
* [Demo](#demo)
* [Screenshot](#screenshot)
* [Languages](#languages)
* [Usage](#usage)
* [Contributors](#contributors)
* [Testing](#testing)
* [Author](#author)
* [Repository](#repository)
* [Questions](#questions)

## Deployment
To deploy this project run
${data.deployment}
## Demo
${data.link}
## Screenshot
![alt-text](${data.screenshot})
## Languages
${data.require}
## Usage
This project can be used ${data.usage}
## Installation
Install ${data.title} with ${data.installation}
## Contributors
Contributions are always welcome!
## Tests
${data.tests}
## Author
[@${data.username}](https://github.com/${data.username})
## Repository
${data.repository}
## Questions
Please send your questions [here](mailto:${data.email}?subject=[GitHub]%20Dev%20Connect) or visit [github/${data.username}](https://github.com/${data.username}) for my other projects on GitHub.
`;
}

module.exports = generateMarkdown;
