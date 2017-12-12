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
        test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader'
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
    ]
  },

  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
  },
};
