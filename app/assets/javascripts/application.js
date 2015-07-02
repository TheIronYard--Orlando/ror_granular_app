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

var myJS = function(){
  $('.notice').fadeOut(500);

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
  $("table").on('hover', '.restaurant_row', 
    function(){
      $(this).find(".delete_button").show();
    },
    function(){
      $(this).find(".delete_button").hide();
    }
  );
  $("#edit_restaurant_link").click(function(){
    $('.hidden').slideDown();
  })
};
$(myJS);
$(document).on("page:load", myJS);  