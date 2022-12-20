const Manager = require('../lib/Manager');
const Employee = require('../lib/Employee');


var assert = require('assert');
describe('inquirer', function() {
  it('Manager name', function() {
    var answers = {
      name: 'Foe'
  
    };
    inquirer.prompt([
      {
        type: 'input',
        name: 'Manager name',
        message: 'What is your name?'
      }
    ]).then(function(answers) {
      var name = document.createElement('h1');
      name.innerHTML = answers.name;
      document.body.appendChild(name);
    });
    assert.equal(answers.name, 'Foe');
  });
});