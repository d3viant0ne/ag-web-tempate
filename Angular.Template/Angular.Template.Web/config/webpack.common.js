const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const helpers = require('./helpers');
const { AotPlugin } = require('@ngtools/webpack');
const extractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        'polyfills': './app/polyfills.ts',
        'vendor': './app/vendor.ts',
        'app': './app/main.ts'
    },

    resolve: {
        extensions: ['.ts', '.js', '.json', '.html']
    },

    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.ts$/,
                exclude: helpers.root('node_modules'),
                loader: 'tslint-loader',
                options: {
                    configFile: 'tslint.json'
                }
            },
            {
                test: /\.ts$/,
                loader: '@ngtools/webpack'
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                include: helpers.root('images'),
                loader: 'file-loader?name=[path][name].[ext]'
            },
            {
                test: /\.(svg|woff|woff2|ttf|eot)$/,
                include: helpers.root('node_modules/font-awesome/fonts'),
                loader: 'file-loader?name=[name].[ext]'
            },
            {
                test: /config\.js$/,
                include: helpers.root('app'),
                loader: 'file-loader?name=[name].[ext]'
            },
            {
                test: /\.json$/,
                include: helpers.root('i18n'),
                loader: 'file-loader?name=[path][name].[ext]'
            },
            {
                test: /\.json$/,
                exclude: helpers.root('i18n'),
                loader: 'json-loader'
            },
            {
                test: /\.css$/,
                include: helpers.root('node_modules'),
                loaders: ['raw-loader', 'css-loader']
            },
            {
                test: /\.css$/,
                exclude: helpers.root('node_modules'),
                use: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader']
                })
            },
            {
                test: /\.scss$/,
                exclude: helpers.root('node_modules'),
                use: extractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },

    plugins: [
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            helpers.root()
        ),

        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: './index.html'
        }),

        new AotPlugin({
            mainPath: helpers.root('app', 'main.ts'),
            tsConfigPath: helpers.root('tsconfig.json')
        })

    ]
};
