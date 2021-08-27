
// back to top button;

$('.back-to-top').click(function(){
  $('html,body').animate({
    scrollTop : 0,
  });
});


$(document).ready(function() {

  // feedback part vedio play;

$('.venobox').venobox();


// feedback js here;
$('.slick-images').slick({
    arrows:false,
    slidesToShow: 1,
    slidesToSroll: 1,
    autoplay: true,
    dots:true,
    asNavFor: '.slick-text',
    
});



$('.slick-text').slick({
    arrows: false,
    slidesToShow: 1,
    slidesToSroll: 1,
    autoplay: true,
    asNavFor: '.slick-images',
});


  });




  $(document).ready(function(){
      // counter up js;

      var counters = $(".count");
      var countersQuantity = counters.length;
      var counter = [];
    
      for (i = 0; i < countersQuantity; i++) {
        counter[i] = parseInt(counters[i].innerHTML);
      }
    
      var count = function(start, value, id) {
        var localStart = start;
        setInterval(function() {
          if (localStart < value) {
            localStart++;
            counters[id].innerHTML = localStart;
          }
        }, );
      }
    
      for (j = 0; j < countersQuantity; j++) {
        count(0, counter[j], j);
      }
  

  })

  // window scroll function;
    
  $(window).scroll(function(){

    'use strict';

  var scrolling = $(this).scrollTop();

  // to show or hide button;
  if(scrolling > 550){
    $('.back-to-top').fadeIn();
  }
  else{
    $('.back-to-top').fadeOut();
  }

  // nav-fix function;

  if(scrolling > 350 ){
    $('nav').addClass('nav-fix');
  }
  else{
    $('nav').removeClass('nav-fix');
  }


  


});
    










