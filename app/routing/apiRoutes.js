app.get("/api/allPeople", function(input, response) {
    return response.json(peoples);
});

app.post("/api/add", function(input, response) {
    var person = input.body;
    peoples.push(person);
    response.json(person);

});