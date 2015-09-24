#!/usr/bin/env python
# -*- coding: utf-8 -*-
# @Author: Administrator
# @Date:   2015-09-24 15:52:00
# @Last Modified by:   Administrator
# @Last Modified time: 2015-09-24 16:21:13
import json
import os
from flask import Flask, Response, request

app = Flask(__name__, static_url_path='', static_folder='./')
app.add_url_rule('/', 'root', lambda: app.send_static_file('index.html'))
# app.add_url_rule('/comments.json', 'root', lambda: app.send_static_file('comments.json'))
@app.route('/comments.json', methods=['GET', 'POST'])
def comments_handler():

    with open('comments.json', 'r') as file:
        comments = json.loads(file.read())

    if request.method == 'POST':
        comments.append(request.form.to_dict())

        with open('comments.json', 'w') as file:
            file.write(json.dumps(comments, indent=4, separators=(',', ': ')))

    return Response(json.dumps(comments), mimetype='application/json', headers={'Cache-Control': 'no-cache'})

if __name__ == '__main__':
    app.run(port=int(os.environ.get("PORT",3000)))