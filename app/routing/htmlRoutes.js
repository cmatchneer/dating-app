var path = require("path");
module.exports = function(app) {
    app.get("/", function(input, response) {
        response.sendFile(path.join(__dirname, "../public/index.html"));
    });
    app.get("/form", function(input, response) {
        response.sendFile(path.join(__dirname, "../public/form.html"));
    });
}