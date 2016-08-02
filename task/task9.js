var http = require('http');
var bl = require('bl');
http.get(process.argv[2],function(res1){
	res1.pipe(bl(function(err,data){
		console.log(data.toString())
	}));
	http.get(process.argv[3],function(res2){
		res2.pipe(bl(function(err,data){
			console.log(data.toString())
		}));
		http.get(process.argv[4],function(res3){
			res3.pipe(bl(function(err,data){
				console.log(data.toString())
			}));
		})
	})
})