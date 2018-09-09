const webpack = require('webpack');
const path = require('path');

module.exports = 
  {
    context: __dirname + '/client',
    entry: './index.js',
    mode: 'development',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['react', 'es2015', 'env'],
            plugins: [
              ['styled-components'], 
              ['babel-plugin-styled-components']
            ],
          },
        },
        {
          test: /\.svg$/,
          use: [
            {
              loader:'babel-loader'
            },
            {
              loader: 'react-svg-loader',
              options: {
                jsx: true
              }
            }
          ]
        }
        // { // images
        //   test: /\.(png|jpg|gif)$/,
        //   use: [
        //       {
        //         loader: 'url-loader',
        //         // options: {
        //         //     // name: '[path][name].[ext]',
        //         //     // context: path.resolve(__dirname, 'client/assets'),
        //         //     // publicPath: './client/',
        //         //     outputPath: path.resolve(__dirname, 'public/assets'),
        //         //     // useRelativePaths: true
        //         // }
        //       }
        //   ] 
        // },
      ]
  },
  output: {
    path: __dirname + '/public',
    filename: 'app.js',
  },
  // plugins: [
  //   new ExtractTextPlugin({
  //       filename: 'dist/[name].bundle.css',
  //       allChunks: true
  //   })
  // ]
};