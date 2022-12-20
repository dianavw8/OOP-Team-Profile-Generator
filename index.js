const inquirer = require('inquirer');
const fs = require('fs');
const { choices } = require('yargs');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const team = []; // Array to store team members

 addManager();

async function addManager() {

  var managerInq = await inquirer.prompt([
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
    }
    
  ]).then(async answers => {
    // Use the answers object to create an manager object
    let manager = new Manager(answers.teamManagersName, answers.teamManagersId, answers.teamManagersEmail, answers.teamManagersOfficeNumber);
   // Add the manager to the team array
  team.push(manager); 

   await addTeamMember();

  });

};

 // Function to prompt to add an engineer or intern to the team.
async function addTeamMember() {
  var inq2 = await inquirer.prompt([
    {
      type: 'list',
      name: 'role',
      message: 'Would you like to add an engineer, an intern or finish building my team?',
      choices: ['Engineer', 'Intern', 'Finish building my team']
    }   
  ]).then(async answers => {


    if (answers.role === 'Engineer') {


      // Prompt for engineer information
      var inqEng = await inquirer.prompt([
        {
          type: 'input',
          name: 'engName',
          message: 'Enter the engineer\'s name:'
        },
        {
          type: 'input',
          name: 'engId',
          message: 'Enter the engineer\'s employee ID:'
        },
        {
          type: 'input',
          name: 'engEmail',
          message: 'Enter the engineer\'s email address:'
        },
        {
          type: 'input',
          name: 'engGithub',
          message: 'Enter the engineer\'s GitHub username:'
        }
        
      ]).then(async answers => {
        // Add the engineer to the team array
        team.push( new Engineer(answers.engName, answers.engId, answers.engEmail, answers.engGithub));
        // Prompt to add another team member
        await addTeamMember();
      });

    } else if (answers.role === 'Intern') {
      // Prompt for intern information
      var inqIntern = await inquirer.prompt([
        {
          type: 'input',
          name: 'intName',
          message: 'Enter the intern\'s name:'
        },
        {
          type: 'input',
          name: 'intId',
          message: 'Enter the intern\'s employee ID:'
        },
        {
          type: 'input',
          name: 'intEmail',
          message: 'Enter the intern\'s email address:'
        },
        {
          type: 'input',
          name: 'intSchool',
          message: 'Enter the intern\'s school:'
        }
      ]).then(async answers => {
        //Add the intern to the team array
        team.push( new Intern (answers.intName, answers.intId, answers.intEmail, answers.intSchool));
        //Prompt to add another team member
        await addTeamMember();
      });

    } else if (answers.role === 'Finish building my team') {
        //Function to return to main menu and exit application
        genHTML();
    } 
    
  })
}

function genHTML(){
// Generate the HTML

let html = `<html>
<body>
    <header>
      <h1 style="text-align-last: center;">My Team</h1>
    </header>
    <section style="display:flex;"> 
      <style>
        .employee {
        display: flex;
        flex-direction: column;
        align-items: center;
        border: 1px solid black;
        width: 200px;
        padding: 20px;
        margin: 20px;
        }
      </style>`;

        team.forEach(teamMember => {
         
          if(teamMember.getRole() == "Manager"){
            html += `
            <div class="employee">
              <h2>${teamMember.name}</h2>
              <p><strong>Role:</strong> ${teamMember.getRole()}</p>
              <p><strong>Name:</strong> ${teamMember.name}</p>
              <p><strong>ID:</strong> ${teamMember.id}</p>
              <p><strong>Email:</strong> ${teamMember.email}</p>
              <p><strong>Office Number:</strong> ${teamMember.officeNumber}</p>
            </div>
          `;
        }
        if(teamMember.getRole() == 'Engineer'){
            html += `
            <div class="employee">
              <h2>${teamMember.name}</h2>
              <p><strong>Role:</strong> ${teamMember.getRole()}</p>
              <p><strong>Name:</strong> ${teamMember.name}</p>
              <p><strong>ID:</strong> ${teamMember.id}</p>
              <p><strong>Email:</strong> ${teamMember.email}</p>
              <p><strong>Github User Name:</strong> ${teamMember.github}</p>
            </div>
          `;
        }
        if(teamMember.getRole() == 'Intern'){
            html += `
            <div class="employee">
              <h2>${teamMember.name}</h2>
              <p><strong>Role:</strong> ${teamMember.getRole()}</p>
              <p><strong>Name:</strong> ${teamMember.name}</p>
              <p><strong>ID:</strong> ${teamMember.id}</p>
              <p><strong>Email:</strong> ${teamMember.email}</p>
              <p><strong>School:</strong> ${teamMember.school}</p>
            </div>
          `;
        }

        });

     html += `
    </section>
</body>
</html>`;

// Write the HTML to a file
fs.writeFileSync('team.html', html);

// Open file in web browser
const open = require('open');
open('team.html');  


}