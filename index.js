const inquirer = require("inquirer");
const fs = require("fs");

inquirer.prompt([
    {
        type: "input",
        message: "What is your project called?",
        name: "titleInput",
    },
    {
        type: "input",
        message: "Describe your project as you would like it to appear in the Readme file.",
        name: "descInput",
    },
    {
        type: "input",
        message: "Describe the installation instructions for your project.",
        name: "instructionsInput",
    },
    {
        type: "input",
        message: "Describe your project's proper usage.",
        name: "usageInput",
    },
    {
        type: "input",
        message: "Describe the instructions you would like contributors to follow.",
        name: "contributeInput",
    },
    {
        type: "input",
        message: "Describe how you would like your project to be tested.",
        name: "testInstructionsInput",
    },
    {
        type: "list",
        message: "Choose which license to attach to the Readme.",
        name: "licenseInput",
        choices: ["placeholderChoice"]
    },
    {
        type: "input",
        message: "Enter your Github username.",
        name: "usernameInput",
    },
    {
        type: "input",
        message: "Enter your email address.",
        name: "emailInput",
    },
])

const readmeContent = 
    `#${titleInput}

    #Description
    ${descInput}
        
    ##Table of Contents
    * Installation
    * Usage
    * License
    * Contributing
    * Tests
    * Questions

    ###Installation
    ${instructionsInput}

    ###Usage
    ${usageInput}

    ###License
    ${licenseInput}

    ###Contributing Instructions
    ${contributeInput}

    ###Testing Instructions
    ${testInstructionsInput}

    ###Questions
    Please direct questions to my github accound found HERE
    Alternatively you can reach me by email at ${emailInput}
    `;