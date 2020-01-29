$(document).ready(function() {
    $("#add").on("click", function(add_to) {
        add_to.preventDefault();

        var newPerson = {
            name: $("#name").val().trim(),
            first: $("#1").val().trim(),
            second: $("#2").val().trim(),
            third: $("#3").val().trim(),
            fourth: $("#4").val().trim(),
            fifth: $("#5").val().trim()
        }

        $.post("/api/add", newPerson).
        then(function(response) {
            console.log(response);
        })


    })
})