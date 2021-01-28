var currentPlayer = 1;//keeps track of current player
var board = document.querySelector("#board");//pointer to the form #board.
var plays = 0;//counts the number of turns taken.
var winYet = false;

//add event listeners to the board buttons
board.b0.addEventListener("click",takeTurn);
board.b1.addEventListener("click",takeTurn);
board.b2.addEventListener("click",takeTurn);
board.b3.addEventListener("click",takeTurn);
board.b4.addEventListener("click",takeTurn);
board.b5.addEventListener("click",takeTurn);
board.b6.addEventListener("click",takeTurn);
board.b7.addEventListener("click",takeTurn);
board.b8.addEventListener("click",takeTurn);

function takeTurn(){
	if(currentPlayer == 1 && this.value == "" && winYet == false){
		this.value = "X";
		this.style.color = "#800080";
		currentPlayer = 2;
		plays++;
	}else if(currentPlayer == 2 && this.value == "" && winYet == false){
		this.value = "O";
		this.style.color = "#32b851";
		currentPlayer = 1;
		plays++;
	}//end of if else to check which player and output x or o
	if(plays >= 5 && currentPlayer != -1){
		checkWin();
	}//end of if to check win
	console.log("plays = " + plays);
}//end takeTurn function

function checkWin(){
	if(board.b0.value == board.b1.value && board.b1.value == board.b2.value && board.b0.value != ""){
		announceWin(board.b0.value);
	}
	else if(board.b3.value == board.b4.value && board.b4.value == board.b5.value && board.b3.value != ""){
		announceWin(board.b3.value);
	}
	else if(board.b6.value == board.b7.value && board.b7.value == board.b8.value && board.b6.value != ""){
		announceWin(board.b6.value);
	}
	else if(board.b0.value == board.b3.value && board.b3.value == board.b6.value && board.b0.value != ""){
		announceWin(board.b6.value);
	}
	else if(board.b1.value == board.b4.value && board.b4.value == board.b7.value && board.b1.value != ""){
		announceWin(board.b1.value);
	}
	else if(board.b2.value == board.b5.value && board.b5.value == board.b8.value && board.b2.value != ""){
		announceWin(board.b2.value);
	}
	else if(board.b0.value == board.b4.value && board.b4.value == board.b8.value && board.b0.value != ""){
		announceWin(board.b0.value);
	}
	else if(board.b2.value == board.b4.value && board.b4.value == board.b6.value && board.b2.value != ""){
		announceWin(board.b6.value);
	}
	else if(plays ==9){
		announceTie();
	}
}//end of checkWin

function announceWin(winner){
	currentPlayer = -1;
	document.querySelector("#popup").innerHTML = '<img src="images/x.png" alt="X cancel button" id="close"><h2>' + winner + ' wins!</h2>';
	document.querySelector("#container").style.display = "flex";
	document.querySelector("#close").addEventListener("click", hidePopup);
}//announceWin

function announceTie(){
	currentPlayer = -1;
	document.querySelector("#container").style.display = "flex";
	
}//announceTie

document.querySelector("#close").addEventListener("click", hidePopup);

function hidePopup(){
	document.querySelector("#container").style.display = "none";
}//end of hidePopup