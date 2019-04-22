var Benchmark = require('benchmark');

var suite = new Benchmark.Suite;

const objSet = {
    btr: true,
    bfl: false,
    int: 4,
    zer: 0,
    mif: -Infinity,
    pif: Infinity,
    und: undefined,
    str: 'hello',
    dat: new Date(),
    nan: 0/0,
    emo: {},
    obj: {one:1,two:2,three:3},
    jso: '{"key":"value"}',
    sym: Symbol(),
    err: new Error(),
    ema: [],
    arr: [1,2,3],
    nul: null,
    pro: new Promise ((resolve,reject) => resolve(true)),
    fun: function(){},
    ems: '',
    flt: 3.14,
    reg: /hello/g,
    map: new Map(),
    set: new Set()
};

// add tests
suite.add('parseFloat#Anonymous', function() {
    for (let obj in objSet) {
        typeof obj == 'number' && obj == obj && (x => (x | 0) === x)(parseFloat(obj));
    }
})
.add('typeof-parseInt', function() {
    for (let obj in objSet) {
        typeof obj == 'number' && obj == obj && parseInt(obj) == obj;
    }
})
.add('typeof-mod', function() {
    for (let obj in objSet) {
        typeof obj == 'number' && (obj%1)===0;
    }
})
.add('parseFloat#WithoutNaNCheck', function() {
    for (let obj in objSet) {
        typeof obj == 'number' && (x => (x | 0) === x)(parseFloat(obj));
    }
})
// add listeners
.on('cycle', function(event) {
  console.log(String(event.target));
})
.on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})
// run async
.run({ 'async': true });
