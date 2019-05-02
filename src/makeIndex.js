const { join, parse } = require('path');
const { lstatSync, readdirSync, writeFileSync } = require('fs');

const isFile = source => lstatSync(source).isFile();
const getLibs = source =>
  readdirSync(source)
    .map(name => join(source, name))
    .filter(isFile);

const libs = getLibs(join(__dirname, 'libs'));

const getLibName = libPath => parse(libPath).name.substr(1);

const getIndexLine = (importPath, importName) => `export { default as ${importName} } from '${importPath}';`;

let indexLine = [];

libs.forEach(lib => {
  indexLine.push(getIndexLine(lib, getLibName(lib)));
});

const indexContent = indexLine.join('\n');
const indexPath = join(__dirname, 'index.mjs');

writeFileSync(indexPath, indexContent);
