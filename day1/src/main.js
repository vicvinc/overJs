/* 
* @Author: Administrator
* @Date:   2015-09-21 14:49:53
* @Last Modified by:   Administrator
* @Last Modified time: 2015-09-23 14:04:53
*/

'use strict';

console.log('env test');

require('style-loader!css-loader!less-loader!./main.less');
var React = require('react');
import { startCount, stopCount } from './app.js';
// import * as btstp from 'react-bootstrap';

var app = React.createClass({
	getInitialState: function() {
		return { curTime: 0 };
	},
	countState: function() {
		this.setState({ curTime: this.state.curTime+1 });
	},
	startHandler: function() {
		this.interval = setInterval(this.countState, 1000);
	},
	stopHandler: function() {
		clearInterval(this.interval);
	},
	clearHandler: function() {
		this.setState({ curTime: 0 });
	},
	render: function() {
		return (
				<div className="nav">
					<ul>
						<li>
							<a href="javascript:void(0)" onClick = { this.startHandler }>Start</a>
						</li>
						<li>
							<a href="javascript:void(0)" onClick = { this.stopHandler }>Stop</a>
						</li>
						<li>
							<a href="javascript:void(0)" onClick = {  this.clearHandler}>Clear</a>
						</li> 
						<li>
							<a href="javascript:void(0)"><span>Ticked: </span>{ this.state.curTime }</a>
						</li> 
					</ul>
				</div>
			);
	}
});
React.render(
	React.createElement(app, null), 
	//<app />,// this kind of mount doesnt work here. idkw.
	document.getElementById('app')
);