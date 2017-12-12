const path = require('path');
const webpack = require('webpack');

module.exports = {

  context: path.resolve(__dirname, 'src'),
  entry: ["./index.js"],
  devtool: 'inline-source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },

  module: {
    rules: [
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },

  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
  },
};
