var fs = require('fs');
var path = require('path');
function callback(err,list)
{
	for(var i in list)
	{
		if(path.extname(list[i]) == '.'+process.argv[3])
		{
			console.log(list[i]);
		}
	}
}
fs.readdir(process.argv[2],callback);
