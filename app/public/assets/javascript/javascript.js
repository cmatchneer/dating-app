$(document).ready(function() {
    $("#add").on("click", function(add_to) {
        add_to.preventDefault();

        var newPerson = {
            name: $("#name").val().trim(),
            pic: $("#pic").val().trim(),
            scores: [$("#1").val(), $("#2").val(), $("#3").val(), $("#4").val(), $("#5").val(),
                $("#6").val(), $("#7").val(), $("#8").val(), $("#9").val(), $("#10").val()
            ]
        }

        $.post("/api/add", newPerson).
        then(function(response) {
            var name = $("<h1>");
            var pic = $("<img>");
            var div = $("<div>");
            var button = $("<button>");
            button.attr({
                id: "close",
                dismiss: "modal",
                type: "button"
            })
            button.addClass("btn btn-secondary");
            name.text(response[0].name);
            pic.attr("src", response[0].pic)
            $(div).append(name, pic, button);
            $("#data").html(div);
        });


    });
    $("#close").on("click", function() {
        $("#data").empty();

    })
})