'use strict';
const webpack           = require('webpack');
const UglifyJSPlugin    = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const merge             = require('webpack-merge');
const common            = require('./webpack.base.js');

const NODE_ENV = {
    'process.env': {
        'NODE_ENV': JSON.stringify('production')
    }
};

module.exports = merge(common, {

    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', options: { minimize: {discardComments: {removeAll: true, }}}}
                    ]
                })
            }
        ]
    },

    plugins: [
        new UglifyJSPlugin({ }),
        new webpack.DefinePlugin(NODE_ENV)
    ]
});