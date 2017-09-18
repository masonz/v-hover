const helpers = require('./helpers')
// CopyWebpackPlugin = require('copy-webpack-plugin');

let config = {
  entry: {
    'vhover': helpers.root('/src/index.ts')
  },
  output: {
    path: helpers.root('/dist'),
    filename: '[name].min.js',
    library: 'UiLib',
    libraryTarget: 'umd'// commonjs2
  },
  devtool: 'source-map',
  externals: {
    vue: {
      root: 'Vue',
      commonjs: 'vue',
      commonjs2: 'vue',
      amd: 'vue'
    }
  },
  resolve: {
    extensions: ['.ts', '.js', '.html']
  },
  module: {
    rules: [
      // {
      //   test: /\.ts$/,
      //   exclude: /node_modules/,
      //   enforce: 'pre',
      //   loader: 'tslint-loader'
      // },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'awesome-typescript-loader'
      },
      {
        test: /\.html$/,
        loader: 'raw-loader',
        exclude: ['./src/index.html']
      }
    ],
  },
  plugins: [
    //   new CopyWebpackPlugin([{
    //     from: 'src/assets',
    //     to: './assets'
    //   },]),
  ]
};

module.exports = config;
