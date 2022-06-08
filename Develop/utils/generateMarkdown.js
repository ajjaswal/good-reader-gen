// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {
  return `# ${answer.title}
  ## Description
  ${answer.description}
  
  ##Table of Contents
  [Installation](#installation)
  [Usage](#usage)
  [License](#license)
  [Contributors](#contributors)
  [Test](#test)
  [Questions](#questions)
  
  ## Installation
  ${answer.installation}
  
  ## Usage
  ${answer.usage}
  
  ## License
  ${answer.license}
  
  ## Contributors
  ${answer.contributors}
  
  ## Test
  ${answer.test}
  
  ## Questions
  My github: ${answer.github}
  My email: ${answer.email}`
}

module.exports = generateMarkdown;
