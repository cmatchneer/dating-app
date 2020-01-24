var express = require("express");
var path = require("path");
var app = express();
var PORT = 3000;
var peoples = [{
    name: "Chris Matchneer",
    first: 1,
    second: 4,
    third: 3,
    fourth: 5,
    fifth: 2,
}];
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get("/", function(input, response) {
    response.sendFile(path.join(__dirname, "index.html"));
});
app.get("/form", function(input, response) {
    response.sendFile(path.join(__dirname, "form.html"));
});
// app.get("/you/:character", function(input, response) {
//     response.sendFile(path.join(__dirname, "yourStates.html"));
// });
app.get("/api/allPeople", function(input, response) {
    return response.json(peoples);
});

app.post("/api/add", function(input, response) {
    var person = input.body;
    peoples.push(person);
    response.json(person);

});



app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});