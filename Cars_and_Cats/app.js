// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL the clients are requesting:
    console.log('client request URL: ', request.url);

    // this is how we do routing:
    if(request.url === "/") {
        fs.readFile('views/Index.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type':'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if(request.url === "/cars") {
        fs.readFile('images/car1.jpg', function (errors, contents){
            response.writeHead(200, {'Content-Type':'image/jpg'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }
    else if (request.url === "/cats") {
        fs.readFile('images/cat1.jpg', function (errors, contents){
            response.writeHead(200, {'Content-type': 'image.jpg'});
            response.write(contents); 
            response.end();
        });
    }
    else if (request.url === "/cars/new") {
        fs.readFile('views/Form.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }
    // request didn't match anything:
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
// tell your server which port to run on
server.listen(6789);
// print to terminal window
console.log("Running in localhost at port 6789");






// File type:	Headers:
// HTML	{'Content-Type': 'text/html'}
// CSS	{'Content-Type': 'text/css'}
// Javascript	{'Content-Type': 'text/javascript'}
// png/jpeg/gif	{'Content-Type': 'image/*'} (* is the image format, ie png or jpeg etc)


