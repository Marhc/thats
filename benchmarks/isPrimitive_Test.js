var Benchmark = require('benchmark');

var suite = new Benchmark.Suite;

const objSet = require('../util/objSet')

const getProto = obj => Object.prototype.toString.call(obj).slice(8,-1)

// add tests
suite.add('Regex#test', function() {
    for (let obj in objSet) {
        (/\b(Null|Undefined|Boolean|String|Number|Symbol)\b/g)
        .test(getProto(obj));
    }
})
.add('Regex#match', function() {
    for (let obj in objSet) {
        !!getProto(obj)
        .match(/\b(Null|Undefined|Boolean|String|Number|Symbol)\b/g);
    }
})
.add('Array#includes', function() {
    for (let obj in objSet) {
        (['Null','Undefined','Boolean','String','Number','Symbol'])
        .includes(getProto(obj));
    }
})
.add('Simple OR', function() {
    for (let obj in objSet) {
        (type => type === 'Null' || 
                 type == 'Undefined' || 
                 type == 'Boolean' || 
                 type == 'String' || 
                 type == 'Number' || 
                 type == 'Symbol')(getProto(obj));
    }
})
.add('String#indexOf', function() {
    for (let obj in objSet) {
        'Null Undefined Boolean String Number Symbol'
        .indexOf(getProto(obj)) > -1;
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
