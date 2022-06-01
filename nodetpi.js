const htpp = require('http');
const fs= require ('fs');
const port = 8080
var http = require("http")

const server = http.createServer(function(req, res) {
    console.log("request was made: +req.url");
    res.writeHead(200, {'Content-Type' : 'text/html'})
    fs.readFile('index.html',function(error, data) {
        if (error) {
            res.write("This is a test message")
            res.end();
        } else {
            res.write(data)
           }
           res.end()
           })
})

 server.listen(port, function(error) {
    if (error) {
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening on port' +port)
    };

})




