const { merge } = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig = require('./webpack.common.js');
const packageJson = require('../package.json');

const devConfig = {
  mode: 'development',
  devServer: {
    port: 8000,
    historyApiFallback: {
      index: 'index.html',
    },
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'mf-app',
      remotes: {
        marketing: 'marketing@http://localhost:8001/remoteEntry.js',
      },
      shared: packageJson.dependencies,
    })
  ]
};

module.exports = merge(commonConfig, devConfig)