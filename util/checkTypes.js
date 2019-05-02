/* eslint-disable import/no-dynamic-require */
/* eslint-disable import/no-extraneous-dependencies */
const moduleFolder = process.argv[2] || '../dist/main.min';

const { join, dirname } = require('path');
const { outputFileSync } = require('fs-extra');

const truthTable = require(join(__dirname, 'truthTable.json'));

const thats = require(moduleFolder);

const spaces = num => ' '.repeat(num);

const makeID = () =>
  Math.random()
    .toString(36)
    .substring(2, 15) +
  Math.random()
    .toString(36)
    .substring(2, 15);

const objSet = require('./objSet');

let utilResult,
  objResult,
  checkResult = {};

for (let util in thats) {
  console.log('\n' + util + '\n');
  utilResult = {};

  for (let obj in objSet) {
    objResult = thats[util](objSet[obj]);
    utilResult[obj] = objResult;
    console.log(obj + ': ' + spaces(19 - obj.length) + objResult);
  }

  checkResult[util] = utilResult;
}

const resultPath = join(join(dirname(__dirname), 'checks'), 'result_' + makeID() + '.json');

const jsonResult = JSON.stringify(checkResult);

outputFileSync(resultPath, jsonResult);

const jsonTruthTable = JSON.stringify(truthTable);

if (jsonResult != jsonTruthTable) {
  console.log("\nERROR: Results don't match with truth table.");
  process.exit(1);
} else {
  console.log('\nBuild OK: Tests performed successfully.');
}
