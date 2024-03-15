//number guessing game

const minnum = 1;
const maxnum= 100;
const answer = Math.floor(Math.random() * (maxnum - minnum + 1));

let attempts = 0;
let guess;
let running = true;//let game to run

while(running)
{
  guess = window.prompt(`Guess a number between ${minnum} - ${maxnum}`)
  guess = Number(guess)

 if (isNaN(guess))
 {
  window.alert("Please enter a valid number")
 }  
 else if(guess<0 || guess>100)
 {
  window.alert("Please enter a number between 1-100");
 }
 else
 {
  attempts++;
  if(guess<answer)
  {
    window.alert("TOO Low! TRY AGAIN!")
  }
  else if(guess>answer)
  {
    window.alert("TOO HIGH! TRY AGAIN!")
  }
  else
  {
    window.alert(`Correct! You found the number ${answer}. It took you ${attempts} attempts`);
    running = false//end the game pra brenda else sepse qetu e kemi ba
    //kodin nese e gjan 
  }
}
}

 
