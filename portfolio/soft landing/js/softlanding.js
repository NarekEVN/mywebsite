window.onload = function(){
	var r = document.getElementById('responsive');
	var ri = document.getElementById('respInfo')
	r.addEventListener('click', function(){
		ri.style.display = 'block';
		mi.style.display ='none';
		si.style.display ='none';
	});
	var m = document.getElementById('mobile');
	var mi = document.getElementById('mobInfo');
	m.addEventListener('click', function(){
		mi.style.display ='block';
		ri.style.display ='none';
		si.style.display ='none';
	});
	var s = document.getElementById('support');
	var si = document.getElementById('supInfo');
	s.addEventListener('click', function(){
		si.style.display ='block';
		mi.style.display ='none';
		ri.style.display ='none';
	});
}

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}
