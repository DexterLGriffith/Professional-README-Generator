// use NPM - initialize and run to include package.json and inquirer. 
const inquirer = require('inquirer');
const fs = require('fs');


// prompts for information for README file. 
inquirer. prompt([
    {
        //readme generator explanation of app 
        message: "What is the Title of your Project?",
        name: "title",
        type: "input",
    },
    {
        message: "Write a short description of your project",
        name: "description",
        type: "input",
    },
    {
        message: "List out the steps needed to complete this project",
        name: "tasks completed",
        type: "input",
    },
    {
        message: "How can the user install your app?",
        type: "input",
        name: "installation",
    },
    {
        message: "Who gets the credit for this project?",
        type: "input",
        name: "credits",
    },
    {
        message: "what resources helped you create this project",
        type: "input",
        name: "references",
    },
    {
        message: "what license would you like to use?",
        type: "list",
        name: "license",
        choices: [
            "MIT license",
            "BSD 2-clause license", 
            "N/A"
        ]
    }
])
// put prompts into readme file for creation. 
.then((data) => {
// get it to write onto a readme file. 
    fs.writeFile('README.md', htmlContent,(err) => {
        if (err) {
            console.log('ERROR',err);
        }
        else {
            console.log('SUCCESS you created a README.md file!');
        }
    });
});