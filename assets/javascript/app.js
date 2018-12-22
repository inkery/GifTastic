$(document).ready(function(){

    $('button').on('click', function() {
        var colour = $(this).data('name');
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + colour + "&api_key=dc6zaTOxFJmzC&limit=10";

        $.ajax({
            url: queryURL,
            method: 'GET'
        })
            .done(function(response) {


                console.log(response)

                var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var colourDiv = $('<div/>');

                    var p =$('<p/>');

                    p.text(results[i].rating);

                    var colourImage = $('<img/>');

                    colourImage.addClass('anImg')

                    colourImage.attr('src', results[i].images.fixed_height.url);

                    colourImage.attr('data-still', results[i].images.fixed_height_still.url)

                    colourImage.attr('data-animate', results[i].images.fixed_height.url)

                    .attr('data-state', 'still');

                    colourDiv.append(p);

                    colourDiv.append(colourImage);

                    colourDiv.prependTo($('#gifs'));
                }

                $('.anImg').on('click', function() {
            
                    var state = $(this).attr('data-state'); 
                    console.log(this);

                    if (state == 'still') {
                    
                    $(this).attr('src', $(this).data('animate'));
                    
                    $(this).attr('data-state', 'animate');

                    } else {
                            
                    $(this).attr('src', $(this).data('still'));
                    
                    $(this).attr('data-state', 'still');
                    }      
                });
            });
    });

    var colours = [''];

    
        //This function "adds" the buttons 

        // handles the event when clicked
        $('#theButton').on('click', function(){
            var colourButton = $("#gif-input").val();
            //adds the new animal

            var newButton = $("<button/>").addClass( "btn btn-info colour").attr('data-name',colourButton).html(colourButton).css({'margin': '5px'});
            
            $("#colourbuttons").append(newButton);
                console.log("Work");

            queryURL = "https://api.giphy.com/v1/gifs/search?q=" + colourButton + "&api_key=dc6zaTOxFJmzC&limit=10";
                console.log(colourButton);

            $.ajax({
            url: queryURL,
            method: 'GET'
            })

            .done(function(response) {

            var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    var colourDiv = $('<div/>');

                    var p =$('<p/>');

                    p.text(results[i].rating);

                    var colourImage = $('<img/>');

                    colourImage.addClass('anImg')

                    colourImage.attr('src', results[i].images.fixed_height_still.url);

                    colourImage.attr('data-still', results[i].images.fixed_height_still.url)

                    colourImage.attr('data-animate', results[i].images.fixed_height.url)

                    .attr('data-state', 'still');

                    colourDiv.append(p);

                    colourDiv.append(colourImage);

                    colourDiv.prependTo($('#gifs'));
                }

                $('.anImg').on('click', function() {
            
                    var state = $(this).attr('data-state'); 
                    console.log(this);

                    if (state == 'still') {
                    
                    $(this).attr('src', $(this).data('animate'));
                    
                    $(this).attr('data-state', 'animate');

                    } else {
                            
                    $(this).attr('src', $(this).data('still'));
                    
                    $(this).attr('data-state', 'still');
                    }      
                });
            });

            $("#gif-input").val("");
            return false;
        })
  
});