// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (value === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (value === "Apache-2.0") {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (value === "FreeBSD") {
    return "[![License: BSD-2-Clause](https://img.shields.io/badge/License-BSD-brightgreen.svg)](https://opensource.org/licenses/BSD-2-Clause)";
  } else if (value === "GNU GPL") {
    return "[![License: GNU GPL](https://img.shields.io/badge/License-GPL-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (value === "MPL-2.0") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  } else {
    return ""
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (value === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (value === "Apache-2.0") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (value === "FreeBSD") {
    return "(https://opensource.org/licenses/BSD-2-Clause)";
  } else if (value === "GNU GPL") {
    return "https://www.gnu.org/licenses/gpl-3.0";
  } else if (value === "MPL-2.0") {
    return "https://opensource.org/licenses/MPL-2.0";
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}


function renderTableOfContents(data){
  console.log(data)
  let table = ''
  if (data.installation&& data.installation.length){
    table += '\n - [Installation](#installation)' 
  }
  if (data.usage&& data.usage.length){
    table += '\n - [Usage](#usage)' 
  }
  if (data.credits&& data.credits.length){
    table += '\n - [Credits](#credits)' 
  }
  if (data.license&& data.license.length){
    table += '\n - [License](#license)' 
  }
  return `## Table of Contents 
  
  ${table}
  `;
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let contents = renderTableOfContents(data)
  let licenseBadge = renderLicenseBadge()
  let str = 
  ` # ${data.title}
  
  ## Description
  ${data.description} 
 
  ${contents}
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  !(${data.screenshot})

  ## Credits
  
  ${data.credits}
  
  ## License
  
 
  
  ## Badges
  
  
  ## Contact
  
  Github: ${data.git}, Email: ${data.email}
  
  ## Tests
  ${data.tests}
`;

return str
}

module.exports = generateMarkdown;
