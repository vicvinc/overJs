/* 
* @Author: Administrator
* @Date:   2015-09-25 10:03:06
* @Last Modified by:   Administrator
* @Last Modified time: 2015-09-25 13:24:04
*/

'use strict';
var fs = require('fs');

function hello() {
	console.log('hello');
}
function rfcb(err, fd) {
	if(err) {
		console.log(err);
	}
	else{
		return fd;
	}
}
function readFile(f, cb) {
	var bf = fs.open(f, 'r', cb);
}
function parserData(f, cb) {
	var data = fs.readFile(f, cb);
}
