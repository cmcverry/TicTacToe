var playerTracker = 0;
var turnCounter = 0;


function makeMove(ident){
	
	var cell = document.getElementById(ident);

		if (cell.innerHTML != null){
			alert("error: not a move")
			} else if (playerTracker == 0){
					cell.innerHTML ="<img src='images/x.png'>"
					cell.classList.add("x");
					cell.classList.add("noPadding");
				} else{
					cell.innerHTML ="<img src='images/circle.png'>"
					cell.classList.add("circle");
					cell.classList.add("noPadding");
					}

			if (playerTracker == 0){
				playerTracker = 1; 
			} else{
				playerTracker = 0;
			}

			winCheck();


			turnCounter++;
			if (turnCounter == 9){
				alert("tie game")
			}
}


function winCheck{
	if 
}


class TicTacToeSquare {
	
}

