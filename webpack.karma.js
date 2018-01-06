'use strict';
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './src/client/index_test.js',

    output: {
        path: path.resolve(__dirname, 'public'),
        filename: "js/index.js"
    },

    devtool: 'inline-source-map',

    watchOptions: {
        aggregateTimeout: 0,
        poll: false,
        ignored: [ /node_modules/,  "src/**/*.tsx", "src/**/*.ts", "src/**/*.scss" ]
    },

    module: {
        rules: [
            {
                test: /\.worker\.js$/,
                use: {
                    loader: 'worker-loader',
                    options: { inline: true, fallback: true }
                }
            },
            { enforce: 'pre', test: /\.js$/, use: 'source-map-loader' },
            { test: /\.ts?$/,
                use: [
                    { loader: 'awesome-typescript-loader', options: { configFileName: 'tsconfig.json' } }
                ],
                exclude: /(?:node_modules)/
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
            },
            {
                test: /\.(ttf|eot|woff|woff2)$/,
                loader: 'file-loader',
                options: { name: 'fonts/[name].[ext]' }
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin('styles/styles.[hash:8].css')
    ]
};