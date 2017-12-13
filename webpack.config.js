const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: "./index.js",
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'bundle.js',
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    port: 9000,
  },
  plugins: [
    //new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([
      { from: 'index.html', to: '../index.html' },
      { from: 'style/app.css', to: '../css' },
      { from: '../node_modules/bpmn-js/assets/bpmn-font/css/', to: '../css' },
      { from: '../node_modules/bpmn-js/assets/bpmn-font/font/', to: '../font' },
      { from: '../node_modules/diagram-js/assets/', to: '../css' },
    ]),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: "transform-loader?brfs"
      }
    ],
  },
};
