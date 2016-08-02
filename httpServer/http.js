var http = require('http');
var fs = require('fs');
var mime = require('mime-types');
var urlProcess = require('url');
var mapProcess = require('through2-map');

var port = process.argv[2]||'8000';
var basePath = process.argv[3]||'./basePath';
if(process.argv[3])
{
    var reg = new RegExp("^[a-zA-Z]\:");
    if(!reg.test(basePath))
    {
        basePath = './basePath'+basePath;
    }
    fs.exists(basePath, function(exist){
        if(!exist)
        {
            //todo
            return;
        }
    })
}
if(!(!isNaN(port)&&port>=0&&port<=65535))
{
    //todo
    return;
}


var server = http.createServer(function(req,resp){
    var url = req.url;
    var method = req.method;
    if('get'!=method)
    {
        resp.writeHead(200,'content-type: text/plain');
        resp.write(method + "not get method");
        return;
    }
    var httpPath = req.pathname;
    var path = (basePath.slice(basePath.length-1)==='/'?basePath+httpPath:basePath+'/'+httpPath);
    fs.exists(path,function(exits){
        if(!exits)
        {
            //todo
        }
        fs.stat(path,function(err,stat){
            if(err)
            {
                //todo
            }
            if(stat.isFile())
            {

            }

        })

    })
});
server.listen(port);