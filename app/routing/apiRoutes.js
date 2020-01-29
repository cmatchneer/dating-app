var people = require("../data/friends");
module.exports = function(app) {
    app.get("/api/allPeople", function(input, response) {
        return response.json(people);
    });

    app.post("/api/add", function(input, response) {
        var person = input.body;
        const userVaules = Object.values(person)
            // console.log("user values" + userVaules);
        people.push(person);

        var total = 0;
        var comapre = 50;
        var match = [people[0]];
        for (var i = 0; i < people.length; i++) {
            const dataBaseValues = Object.values(people[i]);
            // console.log("data base values" + dataBaseValues);

            for (var j = 1; j < userVaules.length; j++) {
                total += Math.abs(dataBaseValues[j] - userVaules[j]);
            }
            if (total < comapre) {
                compare = total;
                match[0] = people[i];
            }

        }
        console.log(total);
        response.json(people);
    });
}