const { setWorldConstructor } = require('cucumber')
const { Given } = require('cucumber');
const { When } = require('cucumber');
const { Then } = require('cucumber');
const { expect } = require('chai');

/// // World /////
//
// Call 'setWorldConstructor' with to your custom world (optional)
//
class CustomWorld {
  constructor({attach, parameters, log}) {
    // needed so `attach`, `log` and `parameters` are properly set
    this.variable = 0;
    this.attach =attach;
    this.parameters = parameters;
    this.log = log;
  }

  incrementBy(number) {
    this.variable += number;
};
  setTo(number) {
    this.variable = number;
  };
}

setWorldConstructor(CustomWorld)

/// // Step definitions /////
//
// use 'Given', 'When' and 'Then' to declare step definitions
//

Given('a variable set to {int}', function (number) {
  this.setTo(number);
});

When('I increment the variable by {int}', function (number) {
  this.incrementBy(number);
  this.attach('{"some", "JSON"}}', 'application/json')
});

Then('the variable should contain {int}', function (number) {
  expect(this.variable).to.eql(number);
});
Given(/^I good in this$/, () => {
  console.log('Yupii!!');
});
