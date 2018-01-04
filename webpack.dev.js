'use strict';
const common  = require('./webpack.base.js');
const merge   = require('webpack-merge');
const path    = require('path');

module.exports = merge(common, {
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: "js/[name].[chunkhash:8].js"
    },

    devtool: 'inline-source-map',

    devServer: {
        contentBase: path.join(__dirname, 'public'),
        port: 8080,
        historyApiFallback: true,
        host: '0.0.0.0',
        hot: false,
        inline: false,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Headers': 'Content-Type'
        }
    },

    watchOptions: {
        aggregateTimeout: 2000,
        poll: false,
        ignored: [ /node_modules/,  "src/**/*.tsx", "src/**/*.ts", "src/**/*.test.*",
                   "src/**/*Test*", "src/**/*.scss" ]
    },

    plugins: [
    ]
});