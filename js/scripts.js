$(document).ready(function(){
	$("#randomWikipedia").on("click",function(){
		window.open("http://en.wikipedia.org/wiki/Special:Random");
	});

	$("#searchWikipedia").on("click",function(){
		alert("button2 clicked");

	 $.ajax({
        type: "GET",
        url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page=Battlestar_Galactica&callback=?",
        contentType: "application/json; charset=utf-8",
        async: false,
        dataType: "json",
        success: function (data, textStatus, jqXHR) {
            console.log(data);
        },
        error: function (errorMessage) {
        }
    });


   });


});