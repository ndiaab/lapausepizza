
const http = require("http");
const path = require("path");
const port = 3000;
const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.sendFile(path.join(__dirname,"build", "index.html"));
});
server.listen(port);
