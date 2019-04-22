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
}

const getProto = obj => Object.prototype.toString.call(obj).slice(8,-1)

// add tests
suite.add('typeof', function() {
    for (let obj in objSet) {
        typeof obj;
    }
})
.add('getProto', function() {
    for (let obj in objSet) {
        getProto(obj);
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
