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
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            }
        ]
     }
 };