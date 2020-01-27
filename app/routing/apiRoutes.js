var people = require("../data/friends");
module.exports = function(app) {
    app.get("/api/allPeople", function(input, response) {
        return response.json(people);
    });

    app.post("/api/add", function(input, response) {
        var person = input.body;
        people.push(person);
        response.json(person);

    });
}