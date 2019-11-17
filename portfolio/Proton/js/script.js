//Magnific Popup
$(document).ready(function() {
	$('.popup-youtube').magnificPopup({
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
    
          src: 'https://www.youtube.com/embed/yP6kdOZHids?autoplay=1' // URL that will be set as a source for iframe.
        },
      },
      srcAction: 'iframe_src', // Templating object key. First part defines CSS selector, second attribute. "iframe_src" means: find "iframe" and set attribute "src".
    }
  });
  // Owl Carousel
  $(".slider").owlCarousel({
    margin:30,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:4
        }
    }
  });
})
// Owl Carousel
$(".reviews_carousel").owlCarousel({
  margin: 30,
  stagePadding: 20,
  items: 1,
  dots: true,
})
$(".companies").owlCarousel({
  items: 5,
  responsive: {
    0:{
      items: 2,
      margin: 20,
      mouseDrag: true,
    },
    1000: {
      margin: 20,
      mouseDrag: false,
    }
  }
})


window.onscroll = function(){
  const header = document.querySelector("header");
  if (window.pageYOffset > 20){
    header.classList.remove("dark_header");
  }
  else{
    header.classList.add("dark_header");
  }
  scrollspy("#home", ".homelink");
  scrollspy("#feature", ".featurelink");
  scrollspy("#screenshots", ".screenshotslink");
  scrollspy("#reviews", ".reviewslink");
  scrollspy("#plans", ".planslink");
  scrollspy("#download", ".loadlink");
  scrollspy(".contact", ".contactlink");
}
const links = document.querySelectorAll('a[href="#"]');
links.forEach(function(i){
  i.addEventListener("click", function(e){
    e.preventDefault();
  })
})
//scrollspy


function scrollspy(element, link){
  let elem = document.querySelector(element);
  let direct = document.querySelector(link);

  if (window.pageYOffset >= elem.offsetTop && window.pageYOffset <= elem.offsetTop + elem.offsetHeight){
    let x = document.querySelector(".active_link");
    if (x){
      x.classList.remove("active_link")
    }
    direct.classList.add('active_link');
  }
  else{
    direct.classList.remove('active_link');
  }
}
scrollspy("#home", ".homelink");
scrollspy("#feature", ".featurelink");
scrollspy("#screenshots", ".screenshotslink");
scrollspy("#reviews", ".reviewslink");
scrollspy("#plans", ".planslink");
scrollspy("#download", ".loadlink");
scrollspy(".contact", ".contactlink");

function scrollto(element, link){
  let direct = document.querySelector(link);
  direct.addEventListener('click', function(){
    let elem = document.querySelector(element).offsetTop;
    window.scroll(0, elem);
  })
}

scrollto("#home", ".homelink");
scrollto("#feature", ".featurelink");
scrollto("#screenshots", ".screenshotslink");
scrollto("#reviews", ".reviewslink");
scrollto("#plans", ".planslink");
scrollto("#download", ".loadlink");
scrollto(".contact", ".contactlink");