/* 
* @Author: Administrator
* @Date:   2015-10-27 15:36:07
* @Last Modified by:   Administrator
* @Last Modified time: 2015-10-28 14:25:52
*/

'use strict';
console.log('this scripts works');
function addGlary() {
	var support = (document.getElementsByTagName && document.getElementById && document.getElementsByClassName);
	if (!support) {
		console.log('brower support error!');
		return false;
	}
	var imglist = document.getElementById('imglist').getElementsByTagName('img');
	for (var i = 0, ii = imglist.length; i < ii; i++) {
		imglist[i].onclick = function() {
			return showPic(this)? false: true;
		}
        imglist[i].onkeypress = function() {
            return showPic(this)? false: true;
        }
	};
	return false;
}
function showPic(pic) {
	var src = pic.getAttribute('src');	
	var placeholder = document.getElementById('placeholder');
	var img = placeholder.childNodes[1];
	img.setAttribute('src', src);
	var description = pic.getAttribute('title');
	var desTxt  = placeholder.childNodes[3];
	desTxt.textContent = description;
	return true;
}
window.onload = function() {
	addGlary();
}