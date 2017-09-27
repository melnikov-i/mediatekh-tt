const webpack = require('webpack');
const path = require('path');
const outputPath = path.resolve(__dirname, './dist');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const webpackConfig = {
  entry: {
    app: [
      path.resolve(__dirname, './src/index.tsx')
    ]
  },
  output: {
    path: outputPath,
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: { // will enable -> import { ... } from '@src/components'
      '@src': path.resolve(__dirname, './src')
    }
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: 'awesome-typescript-loader'
      },
      {
        enforce: 'pre',
        test: /\.js$/,
        use: 'source-map-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, './src/index.html'),
      filename: 'index.html',
      path: outputPath
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    port: 8081,
    historyApiFallback: true,
    inline: true,
    hot: true,
    host: '0.0.0.0'
  }
};

module.exports = webpackConfig;