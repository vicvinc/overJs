/* 
* @Author: Administrator
* @Date:   2015-09-21 14:52:05
* @Last Modified by:   Administrator
* @Last Modified time: 2015-09-21 15:40:54
*/

'use strict';

module.exports = {
	entry: './src/main.js',
	output: {
		path: __dirname,
		filename: 'dist.js'
	},
	module:{
		loaders: [
			{ test: /\.css$/, loader: 'style-loader!css-loader!less-loader' },
			{ test: /\.js/, loader: 'babel-loader?stage=0' }
		]
	}
}