const http 	= require('http');
const fs 	= require('fs');

http.createServer(function(req,res){
	fs.readFile('./index.html', (err,data) => {
		if(err) console.log(err)
		res.writeHeader(200,{'Content-Type':'text/html'});
		res.write(data);
		res.end();
	})
}).listen(process.env.PORT || 8080);