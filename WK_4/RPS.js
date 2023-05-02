const myArr = ["Rock", "Paper", "Scissors"];
// console.log(myArr);

let computer = Math.floor(Math.random() * 3);
let player = Math.floor(Math.random() * 3);
let message = "player" + myArr[player] + "vs computer" +myArr[computer] + "";

//write you're if statement (player === computer)
// Statment "It is a tie";

 if (player === computer) {
message += " it is a tie! ";
 
 } else if (player > computer) {
  if(computer == 0 && player == 2) {
message += " Computer Wins! ";

  } else {
    message += " Player wins! ";
  }

 } else {
     if (computer == 2 && player == 0 ) {
message += " Player wins! ";

  } else {
    message += " Computer Wins! ";

  }}

//  console.log("Player wins!");
//continue checking else "player Wins"
console.log(message); 