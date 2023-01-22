var firstRandomNum, secondRandomNum;        //for variables to be available for global scope, we are using var and not let
var player1Guess, player2Guess;
var player1Score = 0;
var player2Score = 0;
var drawcount = 0
// var checkbutton = document.getElementById("CheckGuesses").disabled       //here we cant add this because we are trying to set the disabled property of the button element to true before the element is added to the DOM. However, since this code runs before the button element is added to the DOM, the call to document.getElementById("CheckGuesses") returns null and trying to access its properties will result in error.
var checkbutton = document.getElementById("CheckGuesses")
var restartbutton = document.getElementById("next1to100")
var nextgamebutton = document.getElementById("restart1to100")

// when "play" button is clicked
function generateNumber() {
  firstRandomNum = Math.floor(Math.random() * 101);
  secondRandomNum = Math.floor(Math.random() * (firstRandomNum + 1));
  document.getElementById("range").innerHTML = "Guess the number between 0 and " + firstRandomNum;
  document.getElementById("inputOfP1").max = firstRandomNum
  document.getElementById("inputOfP2").max = firstRandomNum
  checkbutton.disabled = false;
  nextgamebutton.disabled = false
  restartbutton.disabled = false  
  document.getElementById("displayguess").innerHTML = "The Number is: _"
  document.getElementById("result1to100").innerHTML = "The Winner is .....";
}

// when "CheckGuesses" button is clicked
function Check() {
    player1Guess = document.getElementById("inputOfP1").value;
    player2Guess = document.getElementById("inputOfP2").value;
    if(!player1Guess || !player2Guess){
        alert("Please input a number for both players");
        return;}

    else if(player1Guess && player2Guess){
    document.getElementById("displayguess").innerHTML = "Number was "+secondRandomNum

    if (Math.abs(player1Guess - secondRandomNum) < Math.abs(player2Guess - secondRandomNum)) {
    player1Score++;
    document.getElementById("result1to100").innerHTML = "The Winner is Player 1!";
}
else if (Math.abs(player2Guess - secondRandomNum) < Math.abs(player1Guess - secondRandomNum)) {
    player2Score++;
    document.getElementById("result1to100").innerHTML = "The Winner is Player 2!";
}
else {
    drawcount++
    document.getElementById("result1to100").innerHTML = "Its a Draw!";
}
document.getElementById("p1Score").innerHTML = player1Score;
document.getElementById("p2Score").innerHTML = player2Score;
document.getElementById("draw").innerHTML = drawcount;
checkbutton.disabled = true;
}
}

// when "next1to100" button is clicked
function next1to100() {
  generateNumber();
  document.getElementById("inputOfP1").value = "";
  document.getElementById("inputOfP2").value = "";
}

// when "Oneto100Restart" button is clicked
function Oneto100Restart() {
  player1Score = 0;
  player2Score = 0;
  drawcount = 0
  generateNumber();
  document.getElementById("inputOfP1").value = "";
  document.getElementById("inputOfP2").value = "";
  document.getElementById("p1Score").innerHTML = player1Score;
  document.getElementById("p2Score").innerHTML = player2Score;
  document.getElementById("draw").innerHTML = drawcount;
}
