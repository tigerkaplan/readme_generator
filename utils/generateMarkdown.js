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

`;
}

module.exports = generateMarkdown;
