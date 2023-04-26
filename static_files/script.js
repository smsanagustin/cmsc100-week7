// script.js

//  const title = document.getElementById('title');
//  console.log(title.innerText) // checsk the text in the html of title; look at the console of inspect feature in chrome

//  title.innerHTML = "CAPCOM games";
//  console.log(title.innerText);

//  // modify elements inside another element
//  const games = document.getElementsByClassName('games');
//  games[0].innerHTML = "<h1>"+ games[0].innerText     +"</h1>" // overwrite original text

//  for (let a = 0; a < games.length; a++) {
//     console.log(games[a].getAttribute("id"));
//     games[a].style.color = "red";
//  }

// // remove one div tag without removing it from the html file
// games[0].removeAttribute("style");
// const gamesList = document.getElementById("games-list");
// const list = gamesList.getElementsByTagName("li")
// gamesList.removeChild(list[2]); // removes tags inside gamesList (ol)

// const newGame = document.createElement("li"); // creates new element
// const newGameText = document.createTextNode("Tetris");
// newGame.appendChild(newGameText) // adds newGameText as child to new element
// gamesList.appendChild(newGame);

// event listeners
// function that gets the sum of two numbers given by the user
function getSum(){
    // get the values from the form (.value is to get the form value)
    const num1 = Number(document.getElementById("num1").value);
    const num2 = Number(document.getElementById("num2").value);
    
    // get sum
    const sum = num1 + num2;

    // display sum using backticks
    alert(`The sum is ${sum}`);
}

const calcSum = document.getElementById("calc-sum");
calcSum.addEventListener("click", getSum)