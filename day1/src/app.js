/* 
* @Author: Administrator
* @Date:   2015-09-21 16:31:32
* @Last Modified by:   Administrator
* @Last Modified time: 2015-09-21 17:39:03
*/
//when I was trying to write something 
//then everythin become blank in my mind
//that's why this blurs at here.
//to paradise.


'use strict';
// var util = require('../lib/util.js');
// this works but it relys some other pkgs.

function sayTime(t) {
	var timeContainer = document.getElementById('time-zone');
		if( timeContainer == undefined || !timeContainer ) {
			console.log('get time container failed');
			return ;
		}
		timeContainer.innerHTML = 'current time:' + t;
	return;
};
var app = function() {
	setTimeout(function() { 
		var t = Date();
		sayTime(t);
	}, 10);
};
export {app as apptime};