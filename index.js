const http = require('http');
const url = require('url');
const fs = require('fs');


const data = fs.readFileSync('./data/data.json', 'utf-8');
const dataObject = JSON.parse(data)
   


const server = http.createServer((req, res) => {
    console.log(req.url)

    const pathName = req.url;

    if(pathName === '/' || pathName === '/api') {
        res.writeHead(200, { 'Content-type' : 'application/json'});
        res.end(data)
    } else {
        res.writeHead(404, {
            'Content-type' : 'text/html'
        })
        res.end('<h1>404! Page not found</h1>')
    }
});

server.listen(4200, '127.0.0.1', () => console.log("Listening to requests on port 4200"))
