const Employee = require('../lib/Employee');
const Engineer = require('../lib/Engineer');
const Intern = require('../lib/Intern');
const Manager = require('../lib/Manager');


var assert = require('assert');
describe('inquirer', function() {
  it('Employee Role', function() {
    var answers = {
      name: 'Manager'
  
    };
    inquirer.prompt([
      {
        type: 'input',
        name: 'Employee Role',
        message: 'What is your role?'
      }
    ]).then(function(answers) {
      var name = document.createElement('h1');
      name.innerHTML = answers.name;
      document.body.appendChild(name);
    });
    assert.equal(answers.name, 'Manager');
  });
});