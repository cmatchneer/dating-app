var people = require("../data/friends");
module.exports = function(app) {
    app.get("/api/allPeople", function(input, response) {
        return response.json(people);
    });

    app.post("/api/add", function(input, response) {
        var person = input.body;
        var total = 0;
        var compare = 50;
        var match = [people[0]];
        for (var i = 0; i < people.length; i++) {


            for (var j = 0; j < person.scores.length; j++) {
                total += Math.abs(person.scores[j] - people[i].scores[j]);

            }

            if (total < compare) {
                compare = total;
                match[0] = people[i];

            }
            total = 0;
        }
        response.json(match);
    });
}