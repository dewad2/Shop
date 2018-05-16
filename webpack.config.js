'use strict';

module.exports = {
  entry: './client/app',
  output: {
    path: __dirname,
    filename: './client/public/bundle.js'
  },
  context: __dirname,
  devtool: 'source-map',
  module: {
    loaders: [
      {
        test: /jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  }
};
