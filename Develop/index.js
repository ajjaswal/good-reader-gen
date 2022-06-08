// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// Array of questions for user answer
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
        name: 'contributors',
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

// Function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err)
            throw err;
        console.log('README file created')
    });
};

// Function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function (userInput) {
        console.log(userInput)
        writeToFile("README.md", generateMarkdown(userInput));
    });
};

// Function call to initialize app
init();
