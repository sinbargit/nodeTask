module.exports = function(dir,extname,callback)
{
	var fs = require('fs');
	var path = require('path');
	fs.readdir(dir,function(err,list){
		if(err)
		{
			return callback(err);
		}
		var array = [];
		list.forEach(function(file) {
			if (path.extname(file) === '.'+extname) {
				array.push(file);
			}
		});

		return callback(null,array);
	});
};