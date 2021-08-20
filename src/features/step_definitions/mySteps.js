// Cucumber and chai have been loaded in the browser
const { setWorldConstructor } = require('cucumber');
const { Given } = require('cucumber');
const { When } = require('cucumber');
const { Then } = require('cucumber');
const { expect } = require('chai');

/// // World /////
//
// Call 'setWorldConstructor' with to your custom world (optional)
//

const CustomWorld = function () {
  this.variable = 0;
};

CustomWorld.prototype.setTo = function (number) {
  this.variable = parseInt(number, 10);
};

CustomWorld.prototype.incrementBy = function (number) {
  this.variable += parseInt(number, 10);
};

setWorldConstructor(CustomWorld);

/// // Step definitions /////
//
// use 'Given', 'When' and 'Then' to declare step definitions
//

Given('a variable set to {int}', function (number) {
  this.setTo(number);
});

When('I increment the variable by {int}', function (number) {
  this.incrementBy(number);
  this.attachment('fike', 'sss', 'application/json')
});

Then('the variable should contain {int}', function (number) {
  expect(this.variable).to.eql(number);
});
Given(/^I good in this$/, () => {
  console.log('Yupii!!');
});