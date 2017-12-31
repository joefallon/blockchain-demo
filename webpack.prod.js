'use strict';
const webpack        = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const merge          = require('webpack-merge');
const common         = require('./webpack.base.js');

const NODE_ENV = {
    'process.env': {
        'NODE_ENV': JSON.stringify('production')
    }
};

module.exports = merge(common, {
    plugins: [
        new UglifyJSPlugin({ }),
        new webpack.DefinePlugin(NODE_ENV)
    ]
});