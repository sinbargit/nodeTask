var http = require('http');
var map = require('through2-map');
var server = http.createServer(function(req,resp){
	req.pipe(map(function(obj){
		return obj.toString().toUpperCase();
	})).pipe(resp)
});
server.listen(process.argv[2]);
