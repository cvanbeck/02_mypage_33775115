var http = require("http"),
    fs = require("fs");

const port = 8000;
const content = fs.readFileSync("index.html")

http.createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html"});
    res.end(content);
    }).listen(port, function() {
        console.log(`Node Server is running on ${port}`)
});

