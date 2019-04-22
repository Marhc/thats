// Parse URL from CLI arguments
const moduleFolder = process.argv[2] || '../src';

// Load all utilities with your preferred name
const validate = require( moduleFolder );
const is = require( moduleFolder );

// Or just load a specific utility
const isDate = require( moduleFolder + '/$date' );

const obj = new Date();
console.log('Sample Object: ' + obj );

// Run validations with $ prefix to prevent reserved words
if ( !is.$integer(obj) ) {
    console.log("That's not a integer.");
}

// Or use the "isUtility" pattern
if ( !validate.isNumber(obj) ) {
    console.log("That's not a number.");
}

// If you loaded a specific utility, don't worry and use the name which you choosed
if ( isDate(obj) ) {
    console.log("That's a date!!!");
}
