app.get("/", function(input, response) {
    response.sendFile(path.join(__dirname, "index.html"));
});
app.get("/form", function(input, response) {
    response.sendFile(path.join(__dirname, "form.html"));
});