var path = require('path');
 var webpack = require('webpack');

 module.exports = {
     entry: './main.js',
     output: {
         path: path.resolve(__dirname, 'build'),
         filename: 'main.bundle.js'
     },
     module: {
         loaders: [
             {
                 test: /\.js$/,
		 exclude: /(node-modules)/,
                 loader: 'babel-loader',
                 query: {
                     presets: ['es2016']
                 }
             }
         ]
     },
     plugins: [
	new webpack.optimize.UglifyJsPlugin()
     ]
 };
