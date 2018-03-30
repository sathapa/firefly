$( document ).ready(function() {
 	/*For loading gif [UI]*/
 	$(".span12").hide();
 	
 	var show = 'firefly';
	getShowDesc(show);
	getEpisodeNo(show);
	
	
});

$('#loading-image').show();
/*gets the Response as information about the TV show*/   							/*Expired apikey : d4bad127 */
function getShowDesc(show){
    var url = 'http://www.omdbapi.com/?t='+show+'&apikey=18993d14';
                            $.ajax({
                              type: "GET",
                              async: false,
                              url: url,
                              dataType: "jsonp",
                              crossDomain: true,
                              success: function(response) {
								var data = response;
                              	var title = data.Title;
                                var year = data.Year;
                              	var rated = data.Rated;
                              	var released = data.Released;
                              	var runtime = data.Runtime;
                              	var actors = data.Actors;
                              	var awards = data.Awards;
                              	var genre = data.Genre;
                              	var language = data.Language;
                              	var plot = data.Plot;
                              	var writer = data.Writer;
								var image = data.Poster;
								var rating = data.imdbRating;
								var season = data.totalSeasons;
								if(image !== "N/A"){
									$('#poster').attr('src',image);
									$('#poster').height("259px");
									$('#poster').width("180px;");
								}    
								$('#show_title').text(title);
								$('#show_season').text("[Season "+season+"]");
								$('.year').text("["+year+"]");
								$('#genre').html("<b>Genre</b>: "+genre);
								$('#desc').text(plot);
								$('#cast').html("<b>Starring</b>: "+actors);
								$('#writer').html("<b>Writer</b>: "+writer);
								$('#imdb-rating').html("<b>IMDB rating</b>: "+rating+"/10");

                      	},
                      	complete: function(){
					        $('#loading-image').hide();
					        	$(".span12").show();
					      }
            });
    
}

/*gets the season No. and number of episodes as Response*/
function getEpisodeNo(show){
    var url = 'http://www.omdbapi.com/?t='+show+'&Season=1&apikey=18993d14';
    console.log(url);
                            $.ajax({
                              type: "GET",
                              async: false,
                              url: url,
                              dataType: "jsonp",
                              crossDomain: true,
                              success: function(response) {
                              	var edata = response;
                              	var noEp = edata.Episodes.length;
                              	/*$("p#noep").text(noEp);*/
                              	buildDivToAccumulateData(noEp);

                              	getAllEpisodes(show,noEp);
                        },


            });
    
}

/*Building div to accumulate the respective Episode datas*/
function buildDivToAccumulateData(noEp){
                           	 for(i = 0; i <= noEp; i++) {
								    $('.episodes').append('<div id="episode_'+i+'" />');
								  }
								}

/*gets all the episodes information retrieving in a Sequential manner*/
function getAllEpisodes(show, no){
		for (var i = 1; i <= no; i++) { 
			var url = 'http://www.omdbapi.com/?t='+show+'&Season=1&Episode='+i+'&apikey=18993d14';
			console.log(url);
			

			(function(i){
				    $.ajax({
				        url: url,
				        type: "GET",
		                async: false,
		                dataType: "jsonp",
		                crossDomain: true,
				        method:'post',
				        success: function (response) {
				        	 console.log(response);
							 var epdata = response;
				             var title = epdata.Title;
				             var released = epdata.Released;
				             var actors = epdata.Actors;
				             var director = epdata.Directors;
				             var episode = epdata.Episode;
				             var plot = epdata.Plot;
				             var poster = epdata.Poster;
				             var ratings = epdata.Ratings[0].Value;
				             var runtime = epdata.Runtime;
				             var writer = epdata.Writer;
				             var rating = epdata.imdbRating;
				             var vote = epdata.imdbVotes;

				             $("#episode_"+i).append("<div class='each'><div class='epwrapper'><div class='eptitle'><b>"+episode+". "+title+"</b></div><div class='eplot'>"+plot+"</div><div class='runtime'>Runtime: "+runtime+"</div><div class='rating'>IMDB rating: "+rating+"/10</div></div><div class='epimg'><img class='epiig' src='"+poster+"'></div></div><hr><br>")


				        },
				        
				    })
				    })(i);


		}
	}