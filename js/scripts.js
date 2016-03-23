$(document).ready(function(){
	$("#randomWikipedia").on("click",function(){
		window.open("http://en.wikipedia.org/wiki/Special:Random");
	});

	$("#searchWikipedia").on("click",function(){

		$("#search_box").show();

      });
		
	 $("#submitQuery").on("click",function(){
			var queryData = $("#searchCriteria").val();
			alert(queryData);

			$.ajax({
		        type: "GET",
		        url: "http://en.wikipedia.org/w/api.php?action=query&format=json&list=search&srsearch=Albert%20Einstein&callback=?",
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
		
    	
    
    // $.getJSON("http://en.wikipedia.org/w/api.php?action=parse&format=json&callback=?", {page:"Red Sea clownfish", prop:"text"}, function(data) {console.log(data);});



  


});