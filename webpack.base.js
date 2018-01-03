'use strict';
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');


module.exports = {
    entry: {
        app: './src/client/index.js',
        vendor: ['react', 'react-dom', 'react-router-dom']
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        publicPath: '/',
        filename: "js/[name].[chunkhash:8].js",
        chunkFilename: 'js/[name].[chunkhash:8].js'
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: 'awesome-typescript-loader' },
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
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
    node: {
        "child_process": "empty"
    },
    plugins: [
        new ExtractTextPlugin('styles/styles.[hash:8].css'),
        new CopyWebpackPlugin([ {from:'static/img',to:'img'} ]),
        new CopyWebpackPlugin([ {from:'static/fonts',to:'fonts'} ]),
        new CommonsChunkPlugin({ names: ['vendor', 'manifest'] }),
        new HtmlWebpackPlugin({ template: './static/index.html' })
    ]
};