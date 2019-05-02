/* eslint-disable import/no-dynamic-require */
const { join, dirname } = require('path');

const moduleFolder = join(join(dirname(__dirname), 'dist'), 'main.min');

const thats = require(moduleFolder);

const objSet = require(join(join(dirname(__dirname), 'util'), 'objSet'));

const truthTable = require(join(join(dirname(__dirname), 'util'), 'truthTable.json'));

const spaces = num => ' '.repeat(num);

const getLength = data => data.toString().length;

const getTestTitle = (util, obj) =>
  'Check Truth Table:  * ' +
  util +
  ' *  ' +
  spaces(13 - util.length) +
  obj +
  ': ' +
  spaces(19 - obj.length) +
  truthTable[util][obj] +
  spaces(9 - getLength(truthTable[util][obj]));

for (let util in thats) {
  for (let obj in objSet) {
    test(getTestTitle(util, obj), () => {
      expect(thats[util](objSet[obj])).toBe(truthTable[util][obj]);
    });
  }
}
