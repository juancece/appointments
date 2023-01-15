const path = require('path');
const webpack = require('webpack');

module.exports = {
    module: "development",
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
        ],
    },
};