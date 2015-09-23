/* 
* @Author: Administrator
* @Date:   2015-09-22 15:08:48
* @Last Modified by:   Administrator
* @Last Modified time: 2015-09-23 17:24:41
*/

'use strict';

var React = require('react');
import utils from '../lib/utils.js';

// var UserName = React.createClass({
// 	render: function(){
// 		return (
// 			<input name="UserName" className="user-name" tyep="txt"
// 				placeholder="Your user name or login email" ref="userName"/>
// 		);
// 	}
// });

// var UserPwd = React.createClass({
// 	render: function() {
// 		return (
// 			<input name="UserPwd" className="user-pwd" type="password" 
// 				placeholder="Your password" ref="userPwd"/>
// 		);
// 	}
// });

// var Login = React.createClass({
// 	loginHandler: function() {
// 		console.log('kick');
// 		this.props.onClick();
// 		return;
// 	},
// 	render: function() {
// 		return (
			
// 		);
// 	}
// });

var Login = React.createClass({
	popHandler: function() {
		var remeberMe = this.refs.remeberMe.getDOMNode().value;
		this.props.onClick(remeberMe);
		return;
	},
	render: function() {
		return (
			<div>
				<span>remeber me</span>
				<input type="checkbox" name="RemeberMe" value="true" ref="remeberMe"/>
				<button type="submit" className="btn-info" onClick={this.popHandler}>login</button>
			</div>
		);
	}
});

var app = React.createClass({
	getInitialState: function() {
		return { errMsg: 'write name and pwd to login: admin & admin for default' };
	},
	nullMsgState: function() {
		this.setState({ errMsg: 'user name or password is null! '});
	},
	loginHandler: function(r) {
		var uname = this.refs.userName.getDOMNode().value.trim();
		var upwd = this.refs.userPwd.getDOMNode().value.trim();
		if(uname && upwd){
			
		}else{
			this.nullMsgState();
			return;
		}
		var data = {
			uname: uname,
			upwd: upwd,
			r: r
		};
		var url = '';
		var params = JSON.stringify(data);
		console.log(data);
		utils.httpPost(url, params, function(d){
			alert(d);
		},null);
	},
	render: function() {
		return (
			<div className="login">
				<input name="UserName" className="user-name" tyep="txt"
					placeholder="Your user name or login email" ref="userName"/>
				<input name="UserPwd" className="user-pwd" type="password" 
					placeholder="Your password" ref="userPwd"/>
				<Login onClick={this.loginHandler}/>
				<span>{this.state.errMsg}</span>
			</div>
		);
	}
});
React.render(
	React.createElement(app, null), 
	document.getElementById('app')
);