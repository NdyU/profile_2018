const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const cleanWebpackPlugin = new CleanWebpackPlugin(['dist']);
const htmlWebpackPlugin = new HtmlWebpackPlugin({
  template: "./src/index.html",
  filename: "./index.html",
  title: 'Production'
});

module.exports = {
  entry: {
    app: './src/index.js'
  },
  plugins: [
    cleanWebpackPlugin,
    htmlWebpackPlugin
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [

      //Loader for transpile ES6 => ES5 for browser support, and load the preset enviroment in .babelrc
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['es2015', 'react']
          }
        },
      },

      //Loaders to handle css
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
};
