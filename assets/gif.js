var giphyList = ["Pasta","Burgers","Steak","Coffee"];

for(var i=0; i<giphyList.length; i++){
    var button = $("<button>");
    button.text(giphyList[i]);
    $("#giphyButtons").append(button);
}

$("form button").on("click", function(){
    event.preventDefault();
    var button = $("<button>");

    var inputText = $("input").val();

    button.text(inputText);

    giphyList.push(inputText)

    $("#giphyButtons").append(button);
});

$(document).on("click", "#giphyButtons button", function(){
    var giphy = $(this).text();
    var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + giphy + "&api_key=7Lp5wuX8WsHM1xycYzPJVm1HwCAeGsvp&limit=10";

    $.ajax({
        url:queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response);

        for(var i=0; i<response.data.length; i++){
            var img = $("<img>");
            img.attr("src",response.data[i].images.fixed_width_still.url)

            $("#giphy").prepend(img);
        }

       
    });
})