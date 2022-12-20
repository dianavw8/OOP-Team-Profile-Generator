const Engineer = require('../lib/Engineer');
const Employee = require('../lib/Employee');


var assert = require('assert');
describe('inquirer', function() {
  it('Engineer name', function() {
    var answers = {
      name: 'Joe'
  
    };
    inquirer.prompt([
      {
        type: 'input',
        name: 'Engineer name',
        message: 'What is your name?'
      }
    ]).then(function(answers) {
      var name = document.createElement('h1');
      name.innerHTML = answers.name;
      document.body.appendChild(name);
    });
    assert.equal(answers.name, 'Joe');
  });
});