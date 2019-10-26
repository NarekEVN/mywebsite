let intro = document.querySelector(".intro");
let startBtn = document.querySelector(".start-btn");
let game = document.querySelector(".main");
let footer = document.querySelector("footer")
let pScore = 0;
let cScore = 0;
let playerHand = document.querySelector(".playerHand");
let pcHand = document.querySelector(".pcHand");
startBtn.addEventListener('click', function(){
	intro.classList.add("fadOut");
	game.classList.add("fadeIn");
	footer.classList.add("fadeIn");
});
reload.addEventListener('click', function(){
	location.reload();
});
let playerChoise = document.querySelectorAll(".options button");
let playerNumber = playerChoise.value;
for (let i = 0; i < playerChoise.length; i++){
	playerChoise[i].addEventListener('click', function(){
		let computerOptions = ["rock", "paper", "scissors"];
		let computerNumbers = Math.floor(Math.random()*3);
		let computerChoise = computerOptions[computerNumbers];
		console.log('Computer', computerChoise);
		console.log('Player', (this).value);
		if (computerChoise == "rock" && (this).value == "rock"){
			pcHand.src = "rock.png";
			playerHand.src = "rock.png";
			draw();
		}
		else if(computerChoise == "paper" && (this).value == "paper"){
			pcHand.src = "paper.png";
			playerHand.src = "paper.png";
			draw();
		}
		else if(computerChoise == "scissors" && (this).value == "scissors"){
			pcHand.src = "scissors.png";
			playerHand.src = "scissors.png";
			draw();
		}
		else if(computerChoise == "rock" && (this).value == "paper"){
			pcHand.src = "rock.png";
			playerHand.src = "paper.png";
			win();
		}
		else if(computerChoise == "paper" && (this).value == "rock"){
			pcHand.src = "paper.png";
			playerHand.src = "rock.png";
			lose();
		}
		else if(computerChoise == "rock" && (this).value == "scissors"){
			pcHand.src = "rock.png";
			playerHand.src = "scissors.png";
			lose();
		}
		else if(computerChoise == "scissors" && (this).value == "rock"){
			pcHand.src = "scissors.png";
			playerHand.src = "rock.png";
			win();
		}
		else if(computerChoise == "scissors" && this.value == "paper"){
			pcHand.src = "scissors.png";
			playerHand.src = "paper.png";
			lose();
		}
		else if(computerChoise == "paper" && (this).value == "scissors"){
			pcHand.src = "paper.png";
			playerHand.src = "scissors.png";
			win();
		}
		if (pScore >= 10){
			alert("Congrats! You Win!");
			location.reload();
		}
		if (cScore >= 10){
			alert("You Lose! Game Over");
			location.reload();
		}
	});
}
function draw(){
	result.innerHTML = "Draw";
	let draw = new Audio();
	draw.src = "draw.mp3";
	draw.play();
}
function win(){
	result.innerHTML = "You Win!";
	pScore++;
	playerScore.innerHTML = pScore;
	let coin = new Audio();
	coin.src = "coin.mp3";
	coin.play();
}
function lose(){
	result.innerHTML = "You Lose";
	cScore++;
	pcScore.innerHTML = cScore;
	let fail = new Audio();
	fail.src = "fail.mp3";
	fail.play();
}