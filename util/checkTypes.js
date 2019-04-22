// Parse URL from CLI arguments
const moduleFolder = process.argv[2] || '../src';

const thats = require(moduleFolder)

const spaces = num => (' ').repeat(num)

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

for (let util in thats) {

    if ( util.substr(0,1) != '$' ) {
        console.log( '\n' + util + '\n' )

        for (let obj in objSet) {
            console.log(obj + ': ' + spaces(19 - obj.length) + thats[util](objSet[obj]))
        }
    }
}


