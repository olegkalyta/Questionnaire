const path = require('path')
const webpack = require('webpack')

const staticPath = './public'

const production = process.env.NODE_ENV === 'production'


const config = {
  entry: [
    path.join(__dirname, './bin/www.js'),
  ],
  output: {
    filename: '[name].js',
    publicPath: '/javascript/',
    path: path.join(__dirname, staticPath, 'javascript'),
  },
  module: {
    loaders: [
      { test: /\.(jsx|js)$/, loaders: ['babel-loader'], exclude: /node_modules/ },
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.jade$/, loader: 'jade' },
    ],
  },

  node: { fs: 'empty', net: 'empty' },
  target: 'node',

  devtool: production ? false : 'eval-source-map',
}


if (production) {
  config.plugins.push(new webpack.DefinePlugin({ 'process.env.NODE_ENV': '"production"' }))
}

module.exports = config
