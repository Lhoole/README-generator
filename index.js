// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'What is the project title?',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Please add a description of your project.',
        name: 'description',
      },
      {
        type: 'input',
        message: 'How to install your project.',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'How should you use your project.',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'What is the filepath to your screenshot',
        name: 'screenshot',
      },
      {
        type: 'input',
        message: 'List any credits for the project.',
        name: 'credits',
      },
      {
        type: 'list',
        message: 'What license have you used',
        choices: [
          "MIT",
          "Apache-2.0",
          "FreeBSD",
          "GNU GPL",
          "MPL-2.0",
          "EPL-2.0",
          ""
        ],
        name: 'license',
      },
      {
        type: 'input',
        message: 'Instructions to test the project.',
        name: 'tests',
      },
      {
        type: 'input',
        message: 'Github User',
        name: 'git',
      },
      {
        type: 'input',
        message: 'email address',
        name: 'email',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
 fs.writeFile(fileName, data, (err) =>
   err ? console.error(err) : console.log('Success!')
 );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
   .then((data) => {
    let mkdData = generateMarkdown(data)
    console.log(mkdData)
    const filename = `Sample README.md`;
    writeToFile(filename, mkdData)  
   } );
}

// Function call to initialize app
init();


