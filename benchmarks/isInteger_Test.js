var Benchmark = require('benchmark');

var suite = new Benchmark.Suite;

const objSet = require('../util/objSet')

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
