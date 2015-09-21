/* 
* @Author: Administrator
* @Date:   2015-09-21 14:49:53
* @Last Modified by:   Administrator
* @Last Modified time: 2015-09-21 17:27:09
*/

'use strict';

console.log('env test');

require('style-loader!css-loader!less-loader!./main.less');
var React = require('react');
import {apptime} from './app.js';

var appContainer = React.createClass({
	timeHandler: function() {
		apptime();
	},
	render: function() {
		return (
				<div class="nav">
					<ul>
						<li>
							<a href="#1">Home</a>
						</li> 
						<li>
							<a href="javascript:void(0)" onClick={this.timeHandler}>Time</a>
						</li>
						<li>
							<a href="#3">Account</a>
						</li>
					</ul>
				</div>
			);
	}
});
// var sayTime = React.createClass({
// 	render: function() {
// 		return (
// 				<div id="time-zone"></div>
// 			);
// 	}
// });
//unused
React.render(
	React.createElement(appContainer, null), 
	document.getElementById('app')
);