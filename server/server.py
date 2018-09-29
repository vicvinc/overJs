#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author: Administrator
# @Date:   2015-09-23 15:42:02
# @Last Modified by:   Administrator
# @Last Modified time: 2015-09-23 17:35:08

import sys, cgi, SocketServer, urlparse, json
from BaseHTTPServer import HTTPServer, BaseHTTPRequestHandler
from pprint import pprint
class routeHandler(BaseHTTPRequestHandler):
	def getFile(self, filename):
		filename = filename.replace('/dist/','dist/')
		try:
			f = open(filename, 'rb')
		except Exception, e:
			raise e
		buf = f.read()
		f.close()
		return buf
	def do_GET(self):
		urlArg = urlparse.urlparse(self.path)
		uri = urlArg.path
		print 'REQUEST URI:: ' + uri

		if uri == '/':
			#response index file /
			page = self.getFile('./index.html')
			self.protocal_version = 'HTTP/1.1'
			self.send_response(200)  
			self.send_header("Content-Type", "text/html")         
			self.end_headers()
			self.wfile.write(page)
			del page
		elif uri.endswith('.js'):
			#response js files
			js = self.getFile(uri)
			self.protocal_version = 'HTTP/1.1'
			self.send_response(200)
			self.send_header('Content-Type', 'text/javascript')
			# self.send_header('Content-Disposition', 'attachment;''filename=%s' % filename)      
			self.end_headers()
			self.wfile.write(js)
			del js
		elif uri.endswith('.html'):
			page = self.getFile(uri)
			self.protocal_version = 'HTTP/1.1'
			self.send_response(200)  
			self.send_header("Content-Type", "text/html")         
			self.end_headers()
			self.wfile.write(page)
			del page
		elif uri.endswith('.css'):
			#response css files
			css = self.getFile(uri)
			self.protocal_version = 'HTTP/1.1'
			self.send_response(200)  
			self.send_header("Content-Type", "text/css")         
			self.end_headers()
			self.wfile.write(css)
			del css
		elif uri.endswith('.ico'):
			# ico = self.getFile(uri)
			self.protocal_version = 'HTTP/1.1'
			self.send_response(200)  
			self.send_header("Content-Type", "image/png")         
			self.end_headers()
			# self.wfile.write(ico)
		elif uri.endswith('.map'):
			#deal with .map request which I dont quite understand comes from where
			self.protocal_version = 'HTTP/1.1'
			self.send_response(404)  
			self.send_header("Content-Type", "application/json")         
			self.end_headers()
			self.wfile.write('404 not found')
		elif uri.endswith('.data'):
			self.protocal_version = 'HTTP/1.1'
			self.send_response(200)  
			self.send_header("Content-Type", "application/json")         
			self.end_headers()

	def do_POST(self):
		form = cgi.FieldStorage(
			fp=self.rfile,
			headers=self.headers,
			environ={
				'REQUEST_METHOD':'POST',
				'CONTENT_TYPE':self.headers['Content-Type'],
			}
		)

		# Begin the response
		self.send_response(200)
		self.end_headers()
		self.wfile.write('Client: %s\n' % str(self.client_address))
		self.wfile.write('Path: %s\n' % self.path)
		self.wfile.write('Form data:\n')

		pprint(dir(form))
		pprint(form.headers)
		pprint(form.getlist())
		for f in form.list:
			pprint(f)
			pprint(form[f])
		# Echo back information about what was posted in the form
		# length = int(self.headers['Content-Length'])
		# post_data = urlparse.parse_qs(self.rfile.read(length).decode('utf-8'))
		# for key, value in post_data.iteritems():
		# 	print "%s=%s" % (key, value)


		for field in form.keys():
			pprint(field)
			field_item = form[field]
			if field_item.filename:
				# The field contains an uploaded file
				file_data = field_item.file.read()
				file_len = len(file_data)
				del file_data
				self.wfile.write('\tUploaded %s (%d bytes)\n' % (field, file_len))
			else:
				# Regular form value
				self.wfile.write('\t%s=%s\n' % (field, form[field].value))
		return

	def start_server(port):  
		http_server = HTTPServer(('[IP]', int(port)), routeHandler)  
		http_server.serve_forever()

	def __enter__(self):
		return self

	def __exit__(self, type, value, traceback):
		for file in self.files:
			os.unlink(file)
		del self

if __name__ == '__main__':
	server = HTTPServer(('localhost', 9000), routeHandler)
	print 'Starting server, use <Ctrl-C> to stop'
	server.serve_forever()