$(document).ready(function() {

    // Check for click events on the navbar burger icon
    $(".navbar-burger").click(function() {
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        $(".navbar-burger").toggleClass("is-active");
        $(".navbar-menu").toggleClass("is-active");
  
    });

     $('#cancel').click(function() {
      $('.input').empty(); 
    })


    $('.panel-tabs a').click(function(event) {

        event.preventDefault(); 
        var showThis = $(this).attr('href');
        $('.panel-tabs a').removeClass('is-active'); 
        $(this).toggleClass('is-active'); 


        $('.panel-block').hide(); 
        $(showThis).show();

        $('.tab-title').text($(this).text())
        })
    
    $('.dropdown').click(function() {
        $(this).toggleClass('is-active'); 
    

    })

    $('#submit').click(function(){
       $("#contact-info").empty(); 
        $('#contact-form').html('<h1 class="title">Message sent! Expect a response within 48 business hours.</h1><p class="help">If you need a response sooner, please send me a<a href="mailto:angel.p.schultz@gmail.com"> direct email</a> or <a href="tel:3198304230">call me</a></p>'); 
    });
 

  });


  //4d023697b930daeb8499ec6bf617e602ca6f8a0d 
  //personal access token 

 