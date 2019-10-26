window.onload = function(){
var btn = document.getElementById('btn');
var toggle = document.getElementById('top-menu-toggle');
btn.addEventListener('click',function(){
      btn.classList.toggle('btn_active');
      toggle.classList.toggle('top-menu-open');
 });
  var sendBtn = document.querySelector(".send-btn");
  var mailSection = document.querySelector(".email-form");
  var mailInput = document.querySelector(".email-input");
  var notMail = document.querySelector(".not-mail");
  var exclaimMail = document.querySelector(".not-entered");
  sendBtn.onclick = function(){
  if (mailInput.value == ""){
    exclaimMail.style.display = 'block';
  }
  else{
    exclaimMail.style.display = 'none';
  }
  if (mailInput.value != "" && !String(mailInput).match("@")){
    notMail.style.display = 'block';
  }
  else{
    notMail.style.display = "none";
  }
  }
  mailInput.onclick = function(){
    exclaimMail.style.display = 'none';
    notMail.style.display = "none";
  }
}


$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    dots: true,
  	autoWidth: true,
  	margin: 40,
  });
  $("#owl-workstation").owlCarousel({
    loop: true,
    dots: true,
  });
   $('.popup-youtube').magnificPopup({
      disableOn: 700,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    }); 
});
