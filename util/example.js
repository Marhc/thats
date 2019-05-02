/* eslint-disable import/no-dynamic-require */
// Parse CLI arguments
const moduleFolder = process.argv[2] || '../dist/main.min';

// Load all utilities with your preferred name,
const validate = require(moduleFolder);

// Or just load a specific utility.
const { isDate } = require(moduleFolder);

// Also you can load a specific utility with a custom name.
const { isDate: isReallyDate } = require(moduleFolder);

const obj = new Date();
console.log('Sample Object: ' + obj);

// Run validations with "isUtility" pattern,
if (!validate.isNumber(obj)) {
  console.log("That's not a number.");
}

// Or, if you loaded a specific utility, don't worry and use the name which you choosed.
if (isDate(obj)) {
  console.log("That's a date.");
}

if (isReallyDate(obj)) {
  console.log("That's a really date!!!");
}
