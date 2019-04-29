var Benchmark = require('benchmark');

var suite = new Benchmark.Suite;

const objSet = require('../util/objSet')

const _getType = obj => typeof obj

const _getInst = (obj, proto) =>  obj instanceof proto;

const _getProto = obj => Object.prototype.toString.call(obj).slice(8,-1)

// add tests
suite.add('typeof', function() {
    let result;
    for (let obj in objSet) {
        result = _getType(obj) == 'number';
    }
})
.add('instanceof', function() {
    let result;
    for (let obj in objSet) {
        result = _getInst(obj, Number);
    }
})
.add('Object.prototype', function() {
    for (let obj in objSet) {
        result = _getProto(obj) == 'Number';
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
