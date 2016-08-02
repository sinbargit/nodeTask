var bl = require('bl');
var http = require('http');
http.get(process.argv[2],function(res){
	res.pipe(bl(function(err,data){
		console.log(data.toString('utf8').length);
		console.log(data.toString('utf8'));
	}))
})
