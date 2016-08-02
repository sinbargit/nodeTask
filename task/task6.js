var teskmodule =  require('./tesk6module.js');
teskmodule(process.argv[2],process.argv[3],function(err,file){
	file.forEach(function(item){
		console.log(item);
	})
});
