// Our version of node requires us to pollyfill es6 promises - for css
require('es6-promise').polyfill();

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack');
var merge = require('webpack-merge');

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'build')
};
// he npm_lifecycle_event environment variable is set to whichever stage of the cycle is being executed
const TARGET = process.env.npm_lifecycle_event;

var common = {
  // Entry accpts a path or object of entries
  entry: PATHS.app,
  output: {
    path: PATHS.build,
    filename: 'bundle.js'
  },
  // resolve extensions regex - include react JSX format
  // allows us to refer to files (for imports/includes) without requiring the extension
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  // adding additional loaders
  module: {
    loaders: [
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: PATHS.app
      },{
        test: /\.jsx?$/,
        loaders: ['babel'],
        include: PATHS.app // limit app path so we're not searching within project root
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Kanban app'
    })
  ]
};


if(TARGET === 'start' || !TARGET) {
  module.exports = merge(common, {
    devtool: 'eval-source-map',
    devServer: {
      historyApiFallback: true,
      hot: true,
      inline: true,
      progress: true,
      stats: 'errors-only',
      host: process.env.HOST,
      port: process.env.PORT
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  });
}

