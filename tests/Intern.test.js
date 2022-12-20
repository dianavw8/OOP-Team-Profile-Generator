const Intern = require('../lib/Intern');
const Employee = require('../lib/Employee');


var assert = require('assert');
describe('inquirer', function() {
  it('Intern name', function() {
    var answers = {
      name: 'Moe'
  
    };
    inquirer.prompt([
      {
        type: 'input',
        name: 'Intern name',
        message: 'What is your name?'
      }
    ]).then(function(answers) {
      var name = document.createElement('h1');
      name.innerHTML = answers.name;
      document.body.appendChild(name);
    });
    assert.equal(answers.name, 'Moe');
  });
});