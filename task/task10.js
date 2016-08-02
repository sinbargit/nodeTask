var net = require('net');
var date = new Date();
var strftime = require('strftime');
var server = net.createServer(function(socket){
	socket.write(strftime('%F %H:%M%n', new Date()));
	socket.end();
});
server.listen(process.argv[2]);
