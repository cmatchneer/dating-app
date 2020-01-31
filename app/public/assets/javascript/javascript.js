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
            console.log(response[0]);
            console.log(response[0].name);
            var name = $("<h1>");
            var pic = $("<img>");
            var div = $("<div>");
            var button = $("button");
            button.attr({
                id: "close",
                dismiss: "modal",
                type: "button"
            })
            button.addClass("btn btn-secondary");
            name.text(response[0].name);
            pic.attr("src", response[0].pic)
            $(div).append(name, pic), button;
            $("#data").prepend(div);
        })


    });
    $("#close").on("click", function() {
        $("#data").empty();
    })
})