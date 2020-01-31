var people = require("../data/friends");
module.exports = function(app) {
    app.get("/api/allPeople", function(input, response) {
        return response.json(people);
    });

    app.post("/api/add", function(input, response) {
        var person = input.body;
        const userVaules = Object.values(person)
        var total = 0;
        var compare = 50;
        var match = [people[0]];
        for (var i = 0; i < people.length; i++) {

            const dataBaseValues = Object.values(people[i]);
            console.log(dataBaseValues);
            for (var j = 2; j < userVaules.length; j++) {
                total += Math.abs(dataBaseValues[j] - userVaules[j]);
                console.log(total + "total")
                    //total = Math.abs(total)
                    // console.log(total);
            }

            if (total < compare) {
                compare = total;
                match[0] = people[i];
                // console.log(compare + "compare");
            }
            total = 0;
        }
        response.json(match);
    });
}