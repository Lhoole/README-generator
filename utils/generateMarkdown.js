// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let input = license.license;
  
  if (input === "MIT") {
    return "https://img.shields.io/badge/License-MIT-yellow.svg";
  } else if (input === "Apache-2.0") {
    return "https://img.shields.io/badge/License-Apache%202.0-blue.svg";
  } else if (input === "FreeBSD") {
    return "https://img.shields.io/badge/License-BSD-brightgreen.svg";
  } else if (input === "GNU GPL") {
    return "https://img.shields.io/badge/License-GPL-blue.svg";
  } else if (input === "MPL-2.0") {
    return "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg";
  } else if (input === "EPL-2.0") {
    return "https://img.shields.io/badge/License-EPL%202.0-green.svg";
  } else {
    return ""
  }
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let input = license.license;
  if (input === "MIT") {
    return "https://opensource.org/licenses/MIT";
  } else if (input === "Apache-2.0") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (input === "FreeBSD") {
    return "https://opensource.org/licenses/BSD-2-Clause";
  } else if (input === "GNU GPL") {
    return "https://opensource.org/licenses/GPL-3.0";
  } else if (input === "MPL-2.0") {
    return "https://opensource.org/licenses/MPL-2.0";
  } else if (input === "EPL-2.0") {
    return "https://opensource.org/licenses/EPL-2.0";
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let link = renderLicenseLink(license)
  let input = license.license;
  if (input !== "")
  return `${license.title} is available under the ${input} license. See the LICENSE file or ${link} for more info.`
}

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

function renderScreenshot(data){
  let image = ''
  if (data.screenshot&& data.screenshot.length){
    image += `![Screenshot](${data.screenshot})` 
    return image
  } else return ""
}
// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let contents = renderTableOfContents(data)
  let licenseSpot = renderLicenseSection(data)
  let licenseBadge = renderLicenseBadge(data)
  let image = renderScreenshot(data)
  let str = 
  ` # ${data.title} ![${data.license}](${licenseBadge})
  
  ## Description
  ${data.description} 
 
  ${contents}
  
  ## Installation
  
  ${data.installation}
  
  ## Usage
  
  ${data.usage}
  
  ${image}

  ## Credits
  
  ${data.credits}
  
  ## License
  
  ${licenseSpot}
  
  ## Contact
  
  Github: [${data.git}](https://github.com/${data.git}) , Email: ${data.email}
  
  ## Tests
  ${data.tests}
`;

return str
}

module.exports = generateMarkdown;
