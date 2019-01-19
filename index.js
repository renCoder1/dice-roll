alert("Welcome to 🎲Dice Roll🎲 May the lucky person win🤞🙌!");

function onRollClick() {
  var randomDiceNumber1 = Math.floor(Math.random() * 6 + 1);
  var randomDiceNumber2 = Math.floor(Math.random() * 6 + 1);

  var redDiceImg = randomDiceNumber1 + ".png";
  var blackDiceImg = randomDiceNumber2 + ".png";

  var redDice = document.getElementsByClassName('diceRed');
  var blackDice = document.getElementsByClassName('diceBlack');

  redDice[0].setAttribute("src", "images/" + redDiceImg);
  blackDice[0].setAttribute("src", "images/black" + blackDiceImg);

if(randomDiceNumber1 > randomDiceNumber2){
  document.getElementsByClassName("result_display_h2")[0].innerText= "Player 1 Wins!";
  document.getElementsByClassName("result-img")[0].setAttribute("src","images/redWin.png");
}
else if(randomDiceNumber1 === randomDiceNumber2){
  document.getElementsByClassName("result_display_h2")[0].innerText = "Draws!";
  document.getElementsByClassName("result-img")[0].setAttribute("src","images/draws.png");
}
else
  {
    document.getElementsByClassName("result_display_h2")[0].innerText = "Player 2 Wins";

    document.getElementsByClassName("result-img")[0].setAttribute("src","images/blackWin.png");
  }

}
