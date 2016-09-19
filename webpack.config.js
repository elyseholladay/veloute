var webpack = require('webpack');

module.exports = {
     entry: './app/index',
     output: {
         path: './build',
         filename: 'app.bundle.js'
     },
     module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                include: __dirname + '/app',
                loader: 'babel-loader'
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }
        ]
     }
 };