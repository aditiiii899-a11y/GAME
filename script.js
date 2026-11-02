let secretNumber = 7;
let attempts = 0;
let maxNumber=100;
letgameOver= false;
function guess()
{
if(gameOver== true)
{
document,getElementById("message").innerHTML="GAME OVER! PLAY AGAIN";
return;
}
let guess=document.getElementById("guess").value;
attempts=attempts+1;

document.getElementById("attempts").innerHTML="Attempts: " + attempts;

if(guess==secretNumber)
{
document.getElementById("message").innerHTML="YAY! U GUESSED IT RIGHT!";
gameOver=true;
}
else if(guess>secretNumber)
{
document.getElementById("message").innerHTML="DON'T GO UP, LET'S KEEP IT A LITTLE LOW.";
}
else
{
document.getElementById("message").innerHTML="GOOOOOOOOOOOOO UP, YOU GOT IT BRO! TRY AGAIN.";

}
}

function restartGame()
{
attempts=0;
document.getElementById("attempts").innerHTML="Attempts: 0";
document.getElementById("message").innerHTML="";
document.getElementById("guess").value="";
gameOver=false;
}

function easy()
{
maxNumber=10;
secretNumber=7;
restartGame();
document.getElementById("instructions").innerHTML="Guess a number between 1-10";
}
function medium()
{
maxNumber=50;
secretNumber=30;
restartGame();
document.getElementById("instructions").innerHTML="Guess the number between 1-50";
}
function hard()
{
maxNumber=100;
secretNumber=80;
restartGame();
document.getElementById("instructions").innerHTML="Guess the number between 1-100";
}


