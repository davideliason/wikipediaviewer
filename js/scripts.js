$(document).ready(function(){
	$("#randomWikipedia").on("click",function(){
		window.open("http://en.wikipedia.org/wiki/Special:Random");
	});

	$("#searchWikipedia").on("click",function(){
		$("#search_box").show();
      });

	$("#resetButton").on("click",function(){
		$("#searchCriteria").val("");
		$("#search_box").hide();
	})
		
	 $("#submitQuery").on("click",function()
	   {
			var queryData = $("#searchCriteria").val();
			console.log(queryData);

 
		    $.ajax({
		        type: "GET",
		        url: "http://en.wikipedia.org/w/api.php?action=parse&format=json&prop=text&section=0&page="+queryData+"&callback=?",
		        contentType: "application/json; charset=utf-8",
		        async: false,
		        dataType: "json",
		        // success: function (data, textStatus, jqXHR) {
		        //     console.log(data);
		        // },
		        // error: function (errorMessage) {
		        // }

		        success: function (data, textStatus, jqXHR) {
 
			            var markup = data.parse.text["*"];
			            var blurb = $('<div></div>').html(markup);
			 
			            // remove links as they will not work
			            blurb.find('a').each(function() { $(this).replaceWith($(this).html()); });
			 
			            // remove any references
			            blurb.find('sup').remove();
			 
			            // remove cite error
			            blurb.find('.mw-ext-cite-error').remove();
			            $('#article').html($(blurb).find('p'));
			 
			        },
			        error: function (errorMessage) {
			        }

		          });


		});
});