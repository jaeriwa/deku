const 	path = require('path'),
		ExtractTextPlugin = require('extract-text-webpack-plugin'),
		OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
		cssnano = require("cssnano");

	module.exports = {
		entry: { main: './src/js/index.js' },
		output: {
			path: path.resolve(__dirname, './dist/js'),
			filename: 'scripts.js'
		},
		plugins: [
			new ExtractTextPlugin({
				filename: '../css/style.css'
			})
		],
		module: {
			rules: [
				{
					test: /\.js$/,
					exclude: /node_modules/,
					use: {
						loader: "babel-loader"
					}
				},
				{
					test: /\.scss$/,
					use: ExtractTextPlugin.extract({
						use: [
							'css-loader',
							'postcss-loader',
							'sass-loader'
						]
					})
				}
			]
		}
	};