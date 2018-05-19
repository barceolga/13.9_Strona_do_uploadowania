var formidable = require('formidable');
var fs = require('fs');

exports.upload = function(request, response) {
    console.log("Starting to operate the upload's request.");

    var form = new formidable.IncomingForm();

    form.parse(request, function(err, fields, files) {
        if (err) throw err;

        fs.renameSync(files.upload.path, "test.png");
        response.writeHead(200, {"Content-Type": "text/html"});
        response.write("Received image:<br>");
        response.write("<img src='/show' />");
        response.end();
    });
}

exports.welcome = function(request, response) {
    console.log("Starting to operate the welcome's request.");
        fs.readFile('templates/start.html', function(err, html) {
        if (err) throw err;

        response.writeHead(200, {"Content-Type": "text/html; charset=utf-8"});
        response.write(html);
        response.end();
    })

}

exports.show = function(request, response) {
    fs.readFile("test.png", "binary", function(err, file) {
        if (err) throw err;

        response.writeHead(200, {"Content-Type": "image/png"});
        response.write(file, "binary");
        response.end();
    });
}

exports.error = function(request, response) {
        console.log("I don't have any clue what to do...");
        response.write("404 :(");
        response.end();
}
