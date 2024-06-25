// defining the random number for a dice as basis for the image file selection// 

var rD1 = Math.ceil(Math.random() * 6);
var rD2 = Math.ceil(Math.random() * 6);

// using the defined rundom number for the image file selection//

document.querySelector(".img1").setAttribute("src", "./images/dice"+rD1+".png");

document.querySelector(".img2").setAttribute("src", "./images/dice"+rD2+".png");

//set an if - function to present the winner dice in h1 text, as resulet of the dice value// 

function winner() {
        if (rD1 > rD2) {
         document.querySelector("h1").innerHTML = "Player 1 Wins";
        } 
        else if (rD1 < rD2) {
            document.querySelector("h1").innerHTML = "Player 2 Wins";
        } 
        else {
            document.querySelector("h1").innerHTML = "Draw";
        }
}

winner();
