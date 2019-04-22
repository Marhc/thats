const { lstatSync, readdirSync } = require('fs')
const { join, parse } = require('path')

const isDirectory = source => lstatSync(source).isDirectory()
const getDirectories = source => readdirSync(source).map(name => join(source, name)).filter(isDirectory)

const folders = getDirectories(__dirname);

const getIsName = dir => {
	if ( dir.slice(1,4) == 'get' ) {
		return dir.substr(1)
	} else {
		return 'is'+ dir.slice(1,2).toUpperCase() + dir.substr(2)
	}
}

let folderName = "";
folders.forEach( folder => {
    folderName = parse(folder).name;
	exports[folderName] = require(folder);
	exports[getIsName(folderName)] = require(folder);
})
