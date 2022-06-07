// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user answer
const questions = [
    {
        type: 'answer',
        name: 'title',
        message: 'Enter your project title:'
    },
    {
        type: 'answer',
        name: 'description',
        message: 'Describe your project:'
    },
    {
        type: 'answer',
        name: 'installation',
        message: 'Explain how to install your program:'
    },
    {
        type: 'answer',
        name: 'usage',
        message: 'Explain the usage of your program:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'What license are you using for this project:',
        choices: ['MIT', 'GPLv2', 'Apache', 'GPLv3', 'BSD']
    },
    {
        type: 'answer',
        name: 'contributions',
        message: 'Who contributed to this project:'
    },
    {
        type: 'answer',
        name: 'test',
        message: 'How can this program be tested:'
    },
    {
        type: 'answer',
        name: 'github',
        message: 'Enter your github username:'
    },
    {
        type: 'answer',
        name: 'email',
        message: 'Enter your email address:'
    }
];

// TODO: Create a function to write README file
function writeToFile(answer) {
    var readme = `# ${answer.title}
    ##Description
    ${answer.description}
    
    ##Table of Contents
    [Installation]`
}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
