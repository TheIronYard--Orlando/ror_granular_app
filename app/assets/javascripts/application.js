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
      alert("form not complete");
      event.preventDefault();
    }
  });

  $('.notice').fadeOut(5000);
  $( "#edit_restaurant" ).submit(function( event ) {
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

};

$(document).ready(function() {
  $(".restaurants").hover(function(){
    $(this).find(".delete").show();
    },function(){
    $(this).find(".delete").hide();
    });
});
