var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');

const ENV = process.env.ENV = process.env.NODE_ENV = 'development';
console.log('build mode: ' + ENV);

module.exports = webpackMerge(commonConfig, {
    devtool: 'source-map',

    performance: {
        hints: false
    },

    output: {
        path: helpers.root('wwwroot'),
        publicPath: 'http://localhost:8080/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    },

    plugins: [
        new ExtractTextPlugin({ filename: '[name].css'}),

        new webpack.DefinePlugin({
            'ENV': JSON.stringify(ENV),
            'process.env': {
                'ENV': JSON.stringify(ENV)
            }
        })
    ],
    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        overlay: {
            errors: true,
            warnings: false
        }
    }
});
