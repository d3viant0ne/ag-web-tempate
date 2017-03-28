var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

const ENV = process.env.NODE_ENV = process.env.ENV = 'production';
console.log('build mode: ' + ENV);

module.exports = webpackMerge(commonConfig, {
    devtool: 'hidden-source-map',

    performance: {
        hints: 'warning'
    },

    output: {
        path: helpers.root('wwwroot'),
        publicPath: './',
        filename: '[name].[hash].js',
        chunkFilename: '[id].[hash].chunk.js'
    },

    plugins: [
      new webpack.NoErrorsPlugin(),

      new webpack.optimize.UglifyJsPlugin({
          beautify: false,
          comments: false,
          sourceMap: false,
            compress: {
                screw_ie8: true,
                warnings: false
            },
            mangle: {
                keep_fnames: true,
                screw_i8: true
            }
        }),

      new ExtractTextPlugin({ filename: '[name].[hash].css'}),

      new webpack.DefinePlugin({
          'ENV': JSON.stringify(ENV),
          'process.env': {
              'ENV': JSON.stringify(ENV)
          }
      }),

      new webpack.LoaderOptionsPlugin({
          htmlLoader: {
              minimize: false // workaround for ng2
          }
      })
    ]
});
