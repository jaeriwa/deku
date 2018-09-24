const 	path = require('path'),
		ExtractTextPlugin = require('extract-text-webpack-plugin'),
		OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin'),
		cssnano = require('cssnano'),
		ImageminPlugin = require('imagemin-webpack-plugin').default,
		CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	context: path.resolve(__dirname, 'src'),
	entry: { main: './js/index.js' },
	output: {
		path: path.resolve(__dirname, './dist/js'),
		filename: 'scripts.js'
	},
	plugins: [
		new ExtractTextPlugin({
			filename: '../css/style.css'
		}),
		new CopyWebpackPlugin([{
			from: './images/**/*',
			to: path.resolve(__dirname, './dist')
		}]),
		new ImageminPlugin({ 
			test: /\.(jpe?g|png|gif|svg)$/i
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