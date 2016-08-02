var o = 0;
for(var i=0; i <process.argv.length; i++)
{
	if(i>1)
	{
		o += Number(process.argv[i]);
	}
}
console.log(o);
