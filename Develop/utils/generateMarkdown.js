// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
let renderLicenseBadge = (license) => {
  switch (license) {
    case 'MIT':
      return '![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)';

      case 'GPLv2':
      return '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)]';

    case 'Apache':
      return '![License: Apache](https://img.shields.io/badge/License-Apache%202.0-yellow.svg)';

      case 'GPLv3':
      return '![License: GPL v3](https://img.shields.io/badge/License-GPLv3-yellow.svg)';

    case 'BSD':
      return '![License: BSD](https://img.shields.io/badge/License-BSD%203--Clause-yellow.svg)';

    default:
      return '';
  }
}


// TODO: Create a function that returns the license link
let renderLicenseLink = (license) => {
  if (license !== "none") {
    return "![LicenseLink](#license)";
  } else {
    return '';
  }
}


// TODO: Create a function that returns the license section of README
let renderLicenseSection = (license) => {
  switch (license) {
    case 'MIT':
      return 'License \n [MIT](https://choosealicense.com/licenses/mit/)';

      case 'GPLv2':
        return 'License \n [GPLv2]((https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html))'

        case 'Apache':
          return 'License \n [Apache](https://choosealicense.com/licenses/apache-2.0/)';
    
          case 'GPLv3':
            return 'License \n [GPLv3](https://www.gnu.org/licenses/gpl-3.0)'
    
       
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answer) {
  return `# ${answer.title}
  ## Description
  ${answer.description}

  # ${renderLicenseBadge(answer.license[0])}
  
  ## Table of Contents:

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
