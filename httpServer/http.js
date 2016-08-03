var http = require('http');
var fs = require('fs');
var pathProcess = require('path');
var mime = require('mime-types');
var urlProcess = require('url');
var mapProcess = require('through2-map');

var port = process.argv[2] || '8000';
var basePath = process.argv[3] || './basePath';


if (process.argv[3])
{
	var reg = new RegExp("^[a-zA-Z]\:");
	if (!reg.test(basePath))
	{
		basePath = './basePath' + basePath;
	}
	fs.exists(basePath, function (exist)
	{
		if (!exist)
		{
			//todo
			return;
		}
	})
}
if (!(!isNaN(port) && port >= 0 && port <= 65535))
{
	//todo
	return;
}


var server = http.createServer(function (req, resp)
{
	var url = req.url;
	var host = req.headers.host;
	console.log('1')
	var method = req.method;
	console.log('1.0' + method)
	if ('get' != method.toLowerCase())
	{
		resp.writeHead(400, 'content-type: text/plain');
		resp.write("You method is " + method + " only support GET method");
		resp.end();
		return;
	}
	var urlObj = urlProcess.parse(url, true, true);
	var httpPath = urlObj.pathname;
	var path = (basePath.slice(basePath.length - 1) === '/' ? basePath.slice(0, -1) + httpPath : basePath + httpPath);
	fs.exists(path, function (exits)
	{
		if (!exits)
		{
			console.log('!exits');
			resp.writeHead(404, 'content-type: text/plain');
			resp.end();
			return;
			//todo
		}
		fs.stat(path, function (err, stat)
		{
			console.log('fs.stat(path,function(err,stat){')
			if (err)
			{
				//todo
				console.log('fs.stat error')
			}
			if (stat.isFile())
			{
				console.log('stat.isFile()')
				fs.createReadStream(path).pipe(resp).on('end', function ()
				{
					resp.writeHead(200, mime.contentType(pathProcess.extname(httpPath)));
				});
				return;
			}
			else if (stat.isDirectory())
			{
				fs.readdir(path, function (err, list)
				{
					if (err)
					{
						console.log(err);
					}
					var aList = [];
					list.forEach(function (item)
					{
						aList.push('<div><a href="http://' + host + httpPath + item + '">' + item + '</a></div>');
					});
					resp.writeHead(200, 'content-type: text/plain');
					resp.write(aList.join(''));
					resp.end();
					return;
				})
			}
		})

	})
});
server.listen(port, function ()
{
	console.log('server started')
});