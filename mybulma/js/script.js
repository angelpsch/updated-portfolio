$(document).ready(function() {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
  
    });
 
    $(".panel-tabs").click(function() {
      var id = $('.panel-block').attr('id');
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $('.panel-tabs').toggleClass("is-active");
        $(id).toggleClass('is-invisible'); 

  
    });
  });

  $('#cancel').click(function() {
      $('.input').empty(); 
    })