$(".start").click(function(){
	$(this).fadeOut();
	$(".info-btn").fadeOut();
	$(".dasht").fadeIn();
	$(".timer").fadeIn();
	key();
	clearInterval(int);
	krak();
	clearInterval(en);
	enemy();
});
$(".info-btn").click(function(){
	$(".info").fadeIn();
})
$(".close-info").click(function(){
	$(".info").fadeOut();
})
$(".ok-btn").click(function(){
	$(".info").fadeOut();
})
$(".reload").click(function(){
	restart();
})
function key(){
	$(window).keydown(function(e){
		if (e.key == "ArrowRight" && $(".mytank").width() + 25 + $(".mytank").offset().left < $(".dasht").width()){
			$(".mytank").css({
				left: "+=25px",
			})
		}
		if (e.key == "ArrowLeft" && $(".mytank").offset().left > 25){
			$(".mytank").css({
				left: "-=25px",
			})
		}
		if (e.key == " "){
			let left = $(".mytank").offset().left + 30;
			let x = $(`<div class="krak"> </div>`);
			x.css({
				left: left,
			})
			$(".dasht").append(x);
		}
	})
}
let int;
let point = 0;
let speed = 20;
$(".restart").click(function(){
	let s = confirm("Are you sure you want to restart the game (the current result will be deleted)");
	if (s == true){
		restart();
	}
})
function krak(){
	int = setInterval(() => {
		if (point > 15){
			speed = 23;
		}
		if (point > 30){
			speed = 28;
		}
		$(".krak").css({
			top: "-=50px",
			transition: ".500s linear"
		})
		$(".tank").css({
			top: `+=${speed}px`,
			transition: ".500s linear"
		})
		$(".krak").each(function(){
			if ($(this).offset().top <= 0){
				$(this).remove();
			}
		})
		let boom = $(`<div class="boom"> <div>`);
		$(".tank").each(function(){
			if ($(this).offset().top + $(this).height() >= $(window).height()){
				$(this).remove();
				gameOver();
			}
			if ($(".mytank").offset().top - $(".mytank").height() <= $(this).offset().top && $(".mytank").offset().left >= $(this).offset().left - 60 && $(".mytank").offset().left <= $(this).offset().left + 60){
				boom.css({
					left: $(".mytank").offset().left + 30,
					bottom: 0,
				})
				$(".dasht").append(boom);
				gameOver();
			}
		})
		let krakThis;
		$(".krak").each(function(){
			krakThis = $(this);
			$(".tank").each(function(){
				if (krakThis.offset().top - $(this).height() <= $(this).offset().top && Math.round(krakThis.offset().left) >= $(this).offset().left - 10 && Math.round(krakThis.offset().left) <= $(this).offset().left + 60){
					point ++;
					$(".point").html("Points: " + point);
					boom.css({
						left: $(this).offset().left + 30,
						top: $(this).offset().top - 20,
					})
					$(".dasht").append(boom);
					$(this).remove();
					krakThis.remove();
					setTimeout(() => {
						boom.remove();
					}, 1000)
				}
			})
		})
	}, 500)
}

let en;
function enemy(){
	en = setInterval(() => {
		let left = Math.round(Math.random()*($(".dasht").width()-100));
		let x = $(`<div class="tank"> </div>`);
		x.css({
			left: left,
		})
		$(".dasht").append(x);
	}, 1500)
}

function gameOver(){
	$(".game-over").fadeIn();
	$(".current-score").html("Current score: " + point);
	clearInterval(int);
	clearInterval(en);
}

function restart(){
	point = 0;
	speed = 20;
	$(".point").html("Points: " + point);
	$(".mytank").css({
		left: 0,
	})
	$(".game-over").fadeOut();
	$(".timer").fadeIn();
	clearInterval(int);
	clearInterval(en);
	krak();
	enemy();
	$(".tank").each(function(){
		$(this).remove();
	})
	$(".krak").each(function(){
		$(this).remove();	
	})
	$(".boom").each(function(){
		$(this).remove();
	})
}
