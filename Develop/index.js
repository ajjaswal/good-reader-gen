// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter your project title:'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Explain how to install your program:'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Explain the usage of your program:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license are you using for this project:',
        choices: ['MIT', 'GPLv2', ['Apache', 'GPLv3', 'BSD']]
    },
  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
