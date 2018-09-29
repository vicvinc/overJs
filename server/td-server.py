#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author: Administrator
# @Date:   2015-09-24 10:03:39
# @Last Modified by:   Administrator
# @Last Modified time: 2015-09-24 11:10:48

import tornado.web, tornado.ioloop
from pprint import pprint
# from . import uimodules
import os, json
dirname = os.path.dirname(__file__)
STATIC_PATH = os.path.join(dirname, 'dist')
TEMPLATE_PATH = os.path.join(dirname, 'template')

class LoginHandler(tornado.web.RequestHandler):
	def get(self):
		self.render('index.html')
		# self.write(page)
		# self.finish()
	def post(self):
		# data = self.get_body_argument('uname')
		data = json.loads(self.request.body)
		resp = {
			'code' : 1,
			'msg': '',
			'data': {}
		}
		if((data['uname'] == 'admin') and (data['upwd'] == 'admin')):
			resp['code'] = 1
			resp['msg'] = 'login success'
			resp['data'] = {
				'username': data['uname'],
				'id': 'user'
			}
		else:
			resp['code'] = 0
			resp['msg'] = 'login failed :( username or password is not mathed'
			resp['data'] = {}
		self.write(resp)
		self.finish()

conf = {
	# 'ui_modules': uimodules
	'debug': True,
	'template_path': TEMPLATE_PATH,
	'static_path': STATIC_PATH,
}
app = tornado.web.Application([
		(r'/', LoginHandler),
		(r'/dist/(.*)', tornado.web.StaticFileHandler, dict(path = conf['static_path'])),
	], **conf)

if __name__ == '__main__':
	app.listen(9000)
	tornado.ioloop.IOLoop.current().start()