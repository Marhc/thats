const moduleFolder = process.argv[2] || '../dist/main.min';

const { join, dirname } = require('path')
const { writeFileSync } = require('fs')

const truthTable = require(join(__dirname, 'truthTable.json'))

const thats = require(moduleFolder)

const spaces = num => (' ').repeat(num)

const makeID = () => Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

const objSet = {
	Null: null,
	Undefined: undefined,
    Boolean_True: true,
    Boolean_False: false,
    Zero: 0,
    Integer: 4,
    Float: 3.14,
    Negative_Infinity: -Infinity,
    Positive_Infinity: Infinity,
    Nan: 0/0,
    Empty_String: '',
    Full_String: 'hello',
    JSON_String: '{"key":"value"}',
    Empty_Array: [],
    Full_Array: [1,2,3],
    Empty_Object: {},
    Full_Object: {one:1,two:2,three:3},
    Date_Object: new Date(),
    RegExp_Object: /hello/g,
    Symbol_Object: Symbol(),
    Error_Object: new Error(),
    Function_Object: function(){},
    Map_Object: new Map(),
    Set_Object: new Set(),
    Promise_Object: new Promise ((resolve,reject) => resolve(true))
}

let utilResult, objResult, checkResult = {}

for (let util in thats) {

        console.log( '\n' + util + '\n' )
        utilResult = {}

        for (let obj in objSet) {
            objResult = thats[util](objSet[obj])
            utilResult[obj] = objResult
            console.log(obj + ': ' + spaces(19 - obj.length) + objResult)
        }

        checkResult[util] = utilResult
        
}

const resultPath = join(join(dirname(__dirname), 'checks'), ('result_'+makeID()+'.json'))

const jsonResult = JSON.stringify(checkResult)

writeFileSync(resultPath, jsonResult);

const jsonTruthTable = JSON.stringify(truthTable) 

if (jsonResult != jsonTruthTable) {
    console.log("\nERROR: Results don't match with truth table.")
    process.exit(1);
} else {
    console.log('\nBuild OK: Tests performed successfully.')
}
    

