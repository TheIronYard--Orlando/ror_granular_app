// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .

var all_ready;

all_ready = function() {


  $( ".delete_btn").hide(); // Hide all delete buttons by default
  
  $('.notice').fadeOut(5000);

  $( "#new_restaurant" ).submit(function( event ) { 
    var invalid = false;
    $("input[name*='restaurant']").each(function(){
      if($(this).val() == ''){
        invalid = true
      }
    });
    if(invalid){
      alert("form not complete");
      event.preventDefault();
    }
  });

  $( ".restaurant_row" ).hover(function( event ) { 
    $(this).children( "td" ).children( ".delete_btn" ).show() // Show the delete button when hovering over this row
  }, function( event ) {
    $(this).children( "td" ).children( ".delete_btn" ).hide() // Hide the delete button when no longer hovering over this row
  });

  $( ".delete_btn" ).submit(function( event ) { 
    $(this).parent().parent().remove();
  });

};

$(document).ready(all_ready); // When first loading or hard refresh, eval js
$(document).on('page:load', all_ready); // When following turbolinks link, eval js
