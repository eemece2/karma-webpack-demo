
var webpack = require('webpack');

module.exports = {
    entry: './src/app.js',
    output: {
        filename: './build/bundle.js'
    },
    //Turn on sourcemaps
    devtool: 'source-map',
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }
        }
        ]
    }
};
