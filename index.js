const inquirer = require('inquirer');
const fs = require('fs');
const { choices } = require('yargs');
const Manager = require('./lib/Manager');

inquirer.prompt([
    {
      type: 'input',
      name: 'teamManagersName',
      message: 'Enter the Team Manager\'s name:'
    },
    {
      type: 'input',
      name: 'teamManagersId',
      message: 'Enter the Team Manager\'s ID:'
    },
    {
      type: 'input',
      name: 'teamManagersEmail',
      message: 'Enter the Team Manager\'s email:'
    },
    {
      type: 'input',
      name: 'teamManagersOfficeNumber',
      message: 'Enter the Team Manager\'s office number:'
    },
    {
      type: 'list',
      message: 'Would you like to:',
      name: 'teamManagersOption',
      choices: ['add an engineer', 'add an intern', 'finish building my team'],
    }

  ]).then(answers => {
    // Use the answers object to create an manager object
    let manager = new Manager(answers.teamManagersName, answers.teamManagersId, answers.teamManagersEmail, answers.teamManagersOfficeNumber);
    console.log(manager);
    if (answers.teamManagersOption == 'add an engineer') {
        askEngineerQuestions();
    }
    if (answers.teamManagersOption == 'add an intern') {
        askInternQuestions();
    }
    if (answers.teamManagersOption == 'finish building my team') {
        //dance
        generateHTML();
    }
    
  });
  


// function createWebPage(template, content) {
//     const html = template.replace('{{name}}', content.name)
//                         .replace('{{id}}', content.name)
//                         .replace('{{email}}', content.email)

// }