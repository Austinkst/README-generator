var inquirer = require('inquirer');
var fs = require('fs');

inquirer 
    .prompt([
        {
            type: "input",
            name: "title",
            message: "What is your project's name?"
        },
        {
            type: "input",
            name: "description",
            message: "Please write a description of your project"
        },
        {
            type: "input",
            name: "license",
            message: "What kind of license do you have ?",
        },
        {
            type: "input",
            name: "install",
            message: "How can this be installed?",
        },
        {
            type: "input",
            name: "test", 
            message: "What command should be run to run tests?",
            default: "npm test"
        },
        {
            type: "input", 
            name: "usage",
            message: "What does the user need to know about using the repo?",
        },
        {
            type: "input",
            name: "contributing",
            message: "What does the user know about contributing to the repo?",
        }
    ])
    .then(input_data => {
        // generate README
        generateREADME(input_data);
    })
    .catch(error => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else when wrong
        }
    });


var generateREADME = (input_data) => {
    const README = `# ${input_data.title}
      
          
      ## Table of Contents 

      - [Description](#description)
      - [Install license](#install_license)
      - [Install Instructions](#install_instructions)
      - [Test Instructions](#test_instructions)
      - [Usage Information] (#usage_information)
      - [Contribution Guidelines](#contribution_guidelines)
      - [Questions](#questions)

      ## Description
      * ${input_data.description}
          
      ## License
      * Application is covered under the ${input_data.license} license(s)
          
      ## Install Instructions
      * ${input_data.install_instructions}

      ## Test Instructions 
      * ${input_data.test_instructions}
          
      ## Usage Information
      * ${input_data.usage_information}
          
      ## Contribution Guidelines
      * ${input_data.contribution_guidelines}

      ## Questions 
      * If you have any questions, contact me at ${input_data.email}
      * [github link](https://github.com/${input.data.github_username})
      `;
          
      fs.writeFile("README.md", README, err => {
          if (err) {
               console.log(err);
          } else {
               console.log("README generated successfully!");
          }
    })
}
          