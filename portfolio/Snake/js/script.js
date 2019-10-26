let int;
let endscore;
class Game{
	constructor(){
		this.show();
		this.sn = new Snake;
		this.food = new Food;
		this.over = new gameOver;
		this.score = 0;
		int = setInterval(() => {
			this.sharj();
			this.show();
			this.food.show();
			this.sn.show();
			if (this.sn.arr[this.sn.arr.length-1].x == this.food.x * 20 && this.sn.arr[this.sn.arr.length-1].y == this.food.y * 20){
				this.food.create(); 
				this.sn.count++;
				this.score++;
			}
			endscore = this.score;
			if (this.sn.arr[this.sn.arr.length-1].x + 20 > 600 || this.sn.arr[this.sn.arr.length-1].y + 20 > 600 || this.sn.arr[this.sn.arr.length-1].x + 20 < 0 || this.sn.arr[this.sn.arr.length-1].y + 20 < 0){
				this.show();
				this.over.end();
			}
			for (let i = 0; i < this.sn.arr.length-1; i++){
				if (this.sn.arr[i].x == this.sn.arr[this.sn.arr.length-1].x && this.sn.arr[i].y == this.sn.arr[this.sn.arr.length-1].y){
					this.show();
					this.over.end();
				}
			}
			score.innerHTML = 'Score: ' + this.score;
		}, 100)
	}
	show(){
		Game.c.beginPath();
		Game.c.fillStyle = 'black';
		Game.c.fillRect(0,0,600,600);
	}
	sharj(){
		window.addEventListener('keydown', (e) => {
			if (e.key == 'ArrowRight'){
				this.sn.sx = 1;
				this.sn.sy = 0;
			}
			if (e.key == "ArrowLeft"){
				this.sn.sx = -1;
				this.sn.sy = 0;
			}
			if (e.key == "ArrowUp"){
				this.sn.sx = 0;
				this.sn.sy = -1;
			}
			if (e.key == "ArrowDown"){
				this.sn.sx = 0;
				this.sn.sy = 1;
			}
		})
	}
}
Game.c = canvas.getContext("2d");

class Snake{
	constructor(){
		this.x = 0;
		this.y = 0;
		this.sx = 0;
		this.sy = 1;
		this.count = 3;
		this.arr = [];
	}
	create(){
		this.x += this.sx;
		this.y += this.sy;
	}
	show(){
		this.arr.push({x: this.x*20, y: this.y*20});
		for (let i = 0; i < this.arr.length; i++){
			Game.c.beginPath();
			Game.c.strokeStyle = "green"
			Game.c.fillStyle = 'lime';
			Game.c.fillRect(this.arr[i].x, this.arr[i].y, 20, 20);
			Game.c.strokeRect(this.arr[i].x, this.arr[i].y, 20, 20);
		}
		if (this.count == this.arr.length){
			this.arr.shift()
		}
		this.create();
	}
}

class Food{
	constructor(){
		this.x = Math.round(Math.random()*29);
		this.y = Math.round(Math.random()*29);
	}
	show(){
		Game.c.beginPath();
		let img = document.getElementById("apple");
  	Game.c.drawImage(img, this.x*20, this.y*20, 20, 20);
		// Game.c.fillRect(this.x*20, this.y*20, 20, 20);
	}
	create(){
		this.x = Math.round(Math.random()*29);
		this.y = Math.round(Math.random()*29);
	}
}

class gameOver{
	end(){
		Game.c.font = "70px sans-serif";
		Game.c.fillStyle = 'red';
		Game.c.textAlign = "center";
		Game.c.fillText ("Game Over!", canvas.width/2, canvas.height/3);

		Game.c.beginPath();
		Game.c.font = "50px sans-serif";
		Game.c.fillStyle = 'white';
		Game.c.textAlign = "center";
		Game.c.fillText (`Your score was ${endscore}`, canvas.width/2, canvas.height/2);
		let currentRecord = localStorage.getItem("Record");
		if (endscore > currentRecord){
			Game.c.beginPath();
			Game.c.font = "40px sans-serif";
			Game.c.fillStyle = 'orange';
			Game.c.textAlign = "center";
			Game.c.fillText (`New Record!`, canvas.width/2, canvas.height/1.5);
			localStorage.setItem("Record", endscore);
		}
		clearInterval(int);
	}
}
let x = new Game;