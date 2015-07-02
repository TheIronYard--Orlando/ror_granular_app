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
$(document).ready(myJS);
$(document).on('page:load', myJS);
var myJS;

myJS = function() {


  $('.notice').fadeOut(5000);
  $( "#new_restaurant" ).submit(function( event ) {
    var invalid = false;
    $("input[name*='restaurant']").each(function(){
      if($(this).val() == ''){
        invalid = true
      }
    });
    if(invalid){
      event.preventDefault();
      alert("form not complete");
      return false
    }
/* or...
    if($("input[name*='restaurant']").filter(function(){
      return $(this).val() != ''
    }).length){
      //alert, etc
    }
  });
*/
  });

  $("#edit_restaurant_link").click(function(){
    $('.hidden').slideDown();
  });

  $( "#new_rest_link" ).click(function( event ) { 
    $( "#new_rest_link" ).hide();
  });
  $('table').on(
    {
      mouseenter: function(){
        $(this).find(".hidden").show();
      },
      mouseleave: function(){
        $(this).find(".hidden").hide();
      }
    }, ".restaurants")
}
$(myJS);
$(document).on("page:load", myJS);  