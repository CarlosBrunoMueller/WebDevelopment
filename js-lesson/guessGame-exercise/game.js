//Create Secret Number
var secretNumber = 4;

//ask user for guess
var guess = Number(prompt("Guess a number"));


//check guess
if (guess === secretNumber) {
    alert("You got it!!");
}
else if (guess < secretNumber) {
    alert("To low. Guess again");
}
else {
    alert("To high. Guess again");
}




