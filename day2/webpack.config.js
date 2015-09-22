/* 
* @Author: Administrator
* @Date:   2015-09-22 15:03:13
* @Last Modified by:   Administrator
* @Last Modified time: 2015-09-22 15:07:09
*/

'use strict';

module.exports = {
	entry: './src/main.js',
	output: {
		path: './dist/'
		filename: 'dist.js',
	},
	module: {
		loaders: [
			{ test: /\.css/, 'style-loader!css-loader!less-loader' },
			{ test: /\.js/, 'babel-loader?stage=0' }
		]
	}
};