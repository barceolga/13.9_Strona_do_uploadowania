exports.upload = function(request, response) {
    console.log("Starting to operate the upload's request.");
    response.write("Starting to upload!");
    response.end();
}

exports.welcome = function(request, response) {
    console.log("Starting to operate the welcome's request.");
    response.write("Welcome to the home page!");
    response.end();
}

exports.error = function(request, response) {
    console.log("I don't have any clue what to do...");
    response.write("404 :(");
    response.end();
}
