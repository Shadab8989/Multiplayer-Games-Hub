// // NOTE: The problem im facing with 1/3 changes of game getting draw is, some times count of draws are more than winnings of either players
// // So to avoid this, im things of reducing the probabity of draw from 1/3 to 1/5(2/5 for p1 and p2 to win, 1/5 for a draw)


// Player name change
function playerName() {
    document.querySelector(".p1Name").innerHTML = player1Name.value
    document.querySelector(".p2Name").innerHTML = player2Name.value
    
}


// Rock Paper Scissor

document.querySelector(".btn2").addEventListener("click", playingrps)

var count = 0
var p1count = 0
var p2count = 0
var drawcount = 0

function playingrps(){
    var num1=Math.floor(Math.random()*3)+1;
    var num2=Math.floor(Math.random()*3)+1;

    document.querySelector(".img3").setAttribute("src","images2/rps"+num1+".jpg")
    document.querySelector(".img4").setAttribute("src","images2/rps"+num2+".jpg")


    if ((num1==1 && num2==3) || (num1==2 && num2==1) || (num1==3 && num2==2)) {
        document.querySelector(".rps-container h1").innerHTML="Player 1 Wins"
        // below line will increment count of player 1
        p1count = p1count + 1
        document.querySelector(".increment-p1countrps").innerHTML = p1count


}
    

    else if ((num1==3 && num2==1) || (num1==1 && num2==2) || (num1==2 && num2==3)) {
        document.querySelector(".rps-container h1").innerHTML="Player 2 Wins"
        // below line will increment count of player 1
        p2count = p2count + 1
        document.querySelector(".increment-p2countrps").innerHTML = p2count
}
    else if (num1==num2){
        document.querySelector(".rps-container h1").innerHTML="Draw"
        // below line will increment draw count
        drawcount = drawcount + 1
        document.querySelector(".increment-drawcountrps").innerHTML = drawcount
}

    

    // line below will keep track of no of games played
    count = count + 1
    document.querySelector(".increment-gamerps").innerHTML = count

} 

// Restart 


// for rps game 
document.querySelector(".restart2").addEventListener("click", restartgame2)

function restartgame2() {
    document.querySelector(".rps-container h1").innerHTML="Start"
    document.querySelector(".img3").setAttribute("src","images2/rps3.jpg")
    document.querySelector(".img4").setAttribute("src","images2/rps3.jpg")

    document.querySelector(".increment-gamerps").innerHTML = 0
    document.querySelector(".increment-p1countrps").innerHTML = 0
    document.querySelector(".increment-p2countrps").innerHTML = 0
    document.querySelector(".increment-drawcountrps").innerHTML = 0
    count = 0
    p1count = 0
    p2count = 0
    drawcount = 0
 
}


