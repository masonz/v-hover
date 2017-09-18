const glob = require('glob'),
  path = require('path'),
  webpack = require('webpack'),
  // HtmlWebpackPlugin = require('html-webpack-plugin'),
  ExtractTextPlugin = require('extract-text-webpack-plugin'),
  // PurifyCSSPlugin = require('purifycss-webpack'),
  // FaviconsWebpackPlugin = require('favicons-webpack-plugin'),
  autoprefixer = require('autoprefixer'),
  webpackConfig = require('./webpack.config.base'),
  helpers = require('./helpers'),
  DefinePlugin = require('webpack/lib/DefinePlugin'),
  env = require('../environment/prod.env');

// const extractSass = new ExtractTextPlugin({
//   filename: '[name].min.css',
//   disable: process.env.NODE_ENV === 'development'
// });

// const purifyCss = new PurifyCSSPlugin({
//   paths: glob.sync(path.join(__dirname, '../src/**/*.html')),
//   purifyOptions: {
//     info: true,
//     whitelist: []
//   }
// });

webpackConfig.module.rules = [
  ...webpackConfig.module.rules,
  {
    test: /\.scss$/,
    use: [
      {
        loader: 'style-loader'
      },
      {
        loader: 'css-loader',
        options: {
          minimize: true,
          sourceMap: true,
          importLoaders: 2
        }
      },
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
          plugins: () => [autoprefixer]
        }
      },
      {
        loader: 'sass-loader',
        options: {
          outputStyle: 'expanded',
          sourceMap: true,
          sourceMapContents: true
        }
      }
    ]
  }
];

// ensure ts lint fails the build
webpackConfig.module.rules[0].options = {
  failOnHint: true
};

webpackConfig.plugins = [...webpackConfig.plugins,
// extractSass,
// purifyCss,
// new HtmlWebpackPlugin({
//   inject: true,
//   template: helpers.root('/src/index.html'),
//   favicon: helpers.root('/src/favicon.ico'),
//   minify: {
//     removeComments: true,
//     collapseWhitespace: true,
//     removeRedundantAttributes: true,
//     useShortDoctype: true,
//     removeEmptyAttributes: true,
//     removeStyleLinkTypeAttributes: true,
//     keepClosingSlash: true,
//     minifyJS: true,
//     minifyCSS: true,
//     minifyURLs: true
//   }
// }),
new webpack.optimize.UglifyJsPlugin({
  // exclude: /\.min\.js$/,
  minimize: true,
  comments: false
}),
new DefinePlugin({
  'process.env': env
})
  // new FaviconsWebpackPlugin(helpers.root('/src/icon.png'))
];

module.exports = webpackConfig;
