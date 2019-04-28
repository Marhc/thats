var Benchmark = require('benchmark');

var suite = new Benchmark.Suite;

const objSet = require('../util/objSet')

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
