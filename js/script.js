const shape = document.querySelectorAll(".shape");
const bg = document.querySelector(".start");
const header = document.querySelector("header");

const links = document.querySelectorAll('a[href="#"]');
links.forEach(function(i){
  i.addEventListener("click", function(e){
    e.preventDefault();
  })
})

bg.addEventListener("mousemove", function(e){
  uimove(".red", 30, e);
  uimove(".blue", 40, e);
  uimove(".yellow", 90, e);
  uimove(".purp", 50, e);
})

function uimove(element, speed, e){
  let shape = document.querySelector(element);
  shape.style.transform = "translate("+e.clientX/speed+"px,"+(-e.clientY/speed)+"px"+")";
}

bg.addEventListener("touchmove", function(e){
  uimove(".red", 30, e);
  uimove(".blue", 40, e);
  uimove(".yellow", 90, e);
  uimove(".purp", 50, e);
})

scrollcontrol(".tohome", ".start");
scrollcontrol(".toabout", "#about");
scrollcontrol(".toserv", "#serv");
scrollcontrol(".tocert", "#certf");
scrollcontrol(".toport", "#port");
scrollcontrol(".tocontact", "#contact");
scrollcontrol(".viewworks", "#port");

function scrollcontrol(btn, element){
  const link = document.querySelector(btn);
  link.addEventListener("click", function(){
    let elem = document.querySelector(element).offsetTop - header.offsetHeight;
    window.scrollTo(0, elem);
  })
}

const menubtn = document.querySelector(".menu_toggler");
const menu = document.querySelector(".menu");
menubtn.addEventListener("click", function(){
  let closer = document.getElementById("close");
  if (closer){
    closer.parentNode.removeChild(closer);
  }
  menu.classList.add("active");
  let x = document.createElement("SPAN");
  x.id = "close";
  x.setAttribute("class", "fa fa-times");
  menu.appendChild(x);
})

document.addEventListener("click", function(e){
  if (e.target && e.target.id == "close"){
    menu.classList.remove("active");
  }
})

