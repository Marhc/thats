 const path = require('path');
 const glob_entries = require('webpack-glob-entries');
 
 module.exports = {
   entry: glob_entries(path.resolve(__dirname,'src/**/*.js')),
   output: {
     path: path.resolve(__dirname, 'dist'),
     filename: '[name].js'
   },
   target: 'node'
 };
