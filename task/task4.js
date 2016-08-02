var fs = require('fs');
function callback(err,data)
{
  if(err==null)
  {
	  console.log(data.split('\n').length-1);
  }
}
fs.readFile(process.argv[2],'utf8',callback);