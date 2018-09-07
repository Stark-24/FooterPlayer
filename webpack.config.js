const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: __dirname + '/client',
  entry: './index.js',
  mode: 'development',
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015', 'env']
      },
    },
    // {
    //   test: /\.scss$/,
    //   use: [{
    //       loader: "style-loader"
    //   }, {
    //       loader: "css-loader"
    //   }, {
    //       loader: "sass-loader",
    //       options: {
    //           includePaths: ["absolute/path/a", "absolute/path/b"]
    //       }
    //   }]
    // }
  ]
  },
  output: {
    path: __dirname + '/public',
    filename: 'app.js',
  }
};