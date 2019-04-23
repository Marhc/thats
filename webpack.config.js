const path = require('path');
const glob = require('glob');

const entryArray = glob.sync(__dirname + '/src/**/index.js');

const entryObject = entryArray.reduce((acc, item) => {
  const name = item.replace('.js', '').replace(__dirname + '/src/', '');
  acc[name] = item;
  return acc;
}, {});

module.exports = {
    entry: entryObject,
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ["add-module-exports"]
                    }
                }
            }
        ]
    },
   target: 'web'
};
