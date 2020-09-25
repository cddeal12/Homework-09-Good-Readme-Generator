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
        choices: ["MIT", "Apache", "GPL"]
    },
    {
        type: "input",
        message: "What year is it?",
        name: "currentYearInput"
    },
    {
        type: "input",
        message: "What is your name? (For licensing purposes)",
        name: "nameInput"
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
]).then(function (response) {

    // Creates a github link using the provided username
    const githubLink = "https://github.com/" + response.usernameInput;

    // Determines which license info should be used

    var licenseTitle = "";
    var licenseInfo = "";

    if (response.licenseInput === "Apache") {
        licenseTitle = "Apache v2.0";
        licenseInfo = `Copyright ${response.currentYearInput} ${response.nameInput}

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
        
    http://www.apache.org/licenses/LICENSE-2.0
        
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.`;
    } else if (response.licenseInput === "MIT") {
        licenseTitle = "MIT";
        licenseInfo = `${response.titleInput}

Copyright © ${response.currentYearInput} ${response.nameInput}
        
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
        
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
        
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
    } else if (response.licenseInput === "GPL") {
        licenseTitle = "GPLv3";
        licenseInfo = `${response.title}
Copyright (C) ${response.currentYearInput}  ${response.nameInput}
    
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.
    
This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.
    
You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.`;
    };

    // Contains the content to be added to the new .md file
    const readmeContent = 
        `# ${response.titleInput} ![License Badge for ${licenseTitle}](https://img.shields.io/badge/<License>-<${licenseTitle}>-<green>)

# Description
${response.descInput}
            
## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#testing)
* [Questions](#questions)

<a name="installation"><a>
### Installation
${response.instructionsInput}

<a name="usage"><a>
### Usage
${response.usageInput}

<a name="license"><a>
### License
${licenseInfo}

<a name="contributing"><a>
### Contributing Instructions
${response.contributeInput}

<a name="testing"><a>
### Testing Instructions
${response.testInstructionsInput}

<a name="questions"><a>
### Questions
Please direct questions to my github account, ${response.usernameInput} found at [${githubLink}](${githubLink})
Alternatively you can reach me by email at ${response.emailInput}
`;

    console.log(readmeContent);

    // Writes the new .md file with the provided prompts and structure
    fs.writeFile("your-README.md", readmeContent, function(err) {if (err) throw err})

})
