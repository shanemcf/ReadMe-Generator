const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// npm install --save for terminal

// array of questions for user



//   my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
const questions = [

    {
        type: 'text',
        name: 'title',
        message: 'What is the title of your application?',
    },
    {
        type: 'text',
        name: 'description',
        message: 'what is the description of your application?',

    },
    {
        type: 'text',
        name: 'TOC',
        message: 'what is your Table of Contents?',
    },
    {
        type: 'text',
        name: 'installation',
        message: 'how to install the application?',

    },
    {
        type: 'text',
        name: 'usage',
        message: 'please describe how to use your application?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'what kind of license is your application covered under?',
        choices: ['MIT', 'Apache', 'GPL']

    },
    {
        type: 'text',
        name: 'contributing',
        message: 'who contributed to this application?',
    },
    {
        type: 'text',
        name: 'tests',
        message: 'How can you test your application?',

    },
    {
        type: 'text',
        name: 'questions',
        message: 'what is your email?',
    },
    {
        type: 'text',
        name: 'github',
        message: 'what is your username?',
    },

];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
}

// function to initialize program
function init() {
    inquirer
        .prompt(questions)
        .then(answers => {
            console.info('Answers:', answers);
            const dataToReadme = generateMarkdown(answers);
            writeToFile('readme.md', dataToReadme);
        });
}

// function call to initialize program
init();
