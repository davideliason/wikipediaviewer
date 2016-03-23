$(document).ready(function(){
	$("#randomWikipedia").on("click",function(){
		window.open("http://en.wikipedia.org/wiki/Special:Random");
	});

	$("#searchWikipedia").on("click",function(){

			
    $.ajax({
        type: "GET",
        url: "http://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=Albert%20Einstein&callback=?",
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
            console.log(data.query[search][0]);
        },
        error: function (errorMessage) {
        }
    });
    
    // $.getJSON("http://en.wikipedia.org/w/api.php?action=parse&format=json&callback=?", {page:"Red Sea clownfish", prop:"text"}, function(data) {console.log(data);});



   });


});