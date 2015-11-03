/* 
* @Author: Administrator
* @Date:   2015-11-03 11:04:56
* @Last Modified by:   Administrator
* @Last Modified time: 2015-11-03 13:05:18
*/

'use strict';

function addEditable() {
	var support = (
			document.getElementsByTagName && 
			document.getElementById &&
			document.getElementsByClassName
		);
	if(!support){
		return;
	}
	var tb = document.getElementById('test-tb');
	tb.addEventListener('dblclick', function(e) {
		if(e.target && e.target.nodeName == 'TD'){
			// console.log(e.target.isContentEditable);
			e.target.contentEditable = 'true';
			// console.log(e.target.isContentEditable);
		}
		// e.target&&e.target.nodeName.toUpperCase()=="LI"
	}, false);
	// tb.ondblclick = function() {
	// 	console.log(this);
	// 	this.setAttribute('contenteditable', 'true');
	// }
}
window.onload = function() {
	addEditable();
}