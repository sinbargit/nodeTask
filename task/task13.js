var http = require('http');
var url = require('url');
var server = http.createServer(function(req,resp){
	var obj = url.parse(req.url,true);
	var returnObj = {};
	var isoTime = obj.query.iso;
	if(obj.pathname=='/api/parsetime')
	{
		returnObj.hour = new Date(isoTime).getHours();
		returnObj.minute = new Date(isoTime).getMinutes();
		returnObj.second = new Date(isoTime).getSeconds();
	}
	if(obj.pathname=='/api/unixtime')
	{
		returnObj.unixtime = new Date(isoTime).getTime();
	}
	resp.write(JSON.stringify(returnObj));
	resp.end();
});
server.listen(process.argv[2]);