$(document).ready(function(){
	//========================= Bootstrap carousel =========================
	$('.carousel').carousel({
  interval: 5000,
});
   //========================= Magnific Popup =========================
$('.play-btn').magnificPopup({
  disableOn: 700,
  type: 'iframe',
  mainClass: 'mfp-fade',
  removalDelay: 160,
  preloader: false,
  fixedContentPos: false,
  
  iframe: {
    markup: '<div class="mfp-iframe-scaler">'+
            '<div class="mfp-close"></div>'+
            '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
            '</div>', // HTML markup of popup, `mfp-close` will be replaced by the close button            
    patterns: {
      youtube: {
        index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).
  
        id: 'v=LFJCTBiJub0', // String that splits URL in a two parts, second part should be %id%
        // Or null - full URL will be returned
        // Or a function that should return %id%, for example:
        // id: function(url) { return 'parsed id'; }
  
        src: 'https://www.youtube.com/embed/LFJCTBiJub0?autoplay=0' // URL that will be set as a source for iframe.
      },
    },
    srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
  }
});
$('.portfolio-img').magnificPopup({type:'image'});
  //========================= Filtering =========================	
  $grid = $('.grid').isotope({
  itemSelector: '.element-item',
});
  $('.filter-button').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
  // ========================= Counter =========================
 $('.count').counterUp({
    delay: 10,
    time: 1000
});
 // ========================= Owl-Carousel =========================
  $(".owl-carousel").owlCarousel({
  	autoWidth: true,
    startPosition: 0,
    dotsEach: 2,
    responsive:{
      0:{
        items:1,
        autoWidth: false,
      },
      600:{
        items:3,
        autoWidth: false,
      },
      1000:{
         items:5,
      }
    }
  });
});
//========================= main JS and Carousel+WowJS fix =========================
window.onload = function(){
new WOW().init();
(function( $ ) {

    //Function to animate slider captions 
    function doAnimations( elems ) {
        //Cache the animationend event in a variable
        var animEndEv = 'webkitAnimationEnd animationend';
        
        elems.each(function () {
            var $this = $(this),
                $animationType = $this.data('animation');
            $this.addClass($animationType).one(animEndEv, function () {
                $this.removeClass($animationType);
            });
        });
    }
    
    //Variables on page load 
    var $myCarousel = $('#my-carousel'),
        $firstAnimatingElems = $myCarousel.find('.carousel-item:first').find("[data-animation ^= 'animated']");
        
    //Initialize carousel 
    $myCarousel.carousel();
    
    //Animate captions in first slide on page load 
    doAnimations($firstAnimatingElems);
    
    //Pause carousel  
    $myCarousel.carousel('pause');
    
    
    //Other slides to be animated on carousel slide event 
    $myCarousel.on('slide.bs.carousel', function (e) {
        var $animatingElems = $(e.relatedTarget).find("[data-animation ^= 'animated']");
        doAnimations($animatingElems);
    });  
    
})(jQuery);
//
}
