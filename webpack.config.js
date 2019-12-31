var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname);
var APP_DIR = path.resolve(__dirname);

var config = {
    entry: './src/app.js',
    output: {
      filename: 'bundle.js',
      publicPath: "https://silvioaburto.github.io/la_loteria"
      path: __dirname + '/build'
    }
  }
  ;


module.exports = config;