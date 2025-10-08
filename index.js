var http = require("http");
const port = 8000;

content = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1>My first name is Charlie</h1>
        <h2>My second name is van Beck</h2>
        <p>and I study at Goldsmiths University</p>
    </body>
    </html>
`

http.createServer(function(req, res) {
    res.writeHead(200, { "Content-Type": "text/html"});
    res.end(content);
    }).listen(port, function() {
        console.log(`Node Server is running on ${port}`)
});

