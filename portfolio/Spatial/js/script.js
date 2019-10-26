const menutoggler = document.querySelector(".menu_toggler");
const menu = document.querySelector(".menu");
menutoggler.addEventListener("click", function(){
  menu.classList.add("active");
  let closer = document.querySelector("#xmenu");
  if (closer){
    closer.parentNode.removeChild(closer);
  }
  let x = document.createElement("SPAN");
  x.setAttribute("class", "fa fa-times close_menu");
  x.id = "xmenu";
  menu.appendChild(x);
})

document.addEventListener("click", function(e){
  if (e.target && e.target.id == "xmenu"){
    menu.classList.remove("active");
  }
})