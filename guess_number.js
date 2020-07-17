// This is a number guessing name. A randomly generated number between 0-100 with be created.
// The user will be instructed to pick a number and will be notified if the nubmer is higher 
// or lower until the correct number is picked.

let prompt = require('prompt-sync')();
let done = false;
while (!done){
    console.clear();
    console.log("Welcome to the Number Guessing Game!");
    console.log("A random number between 0-100 has been created.");
    let randomNumber = Math.floor(Math.random()*100);
    let n = prompt(`Please guess a number: `);
    while (n != randomNumber){
        if (n < randomNumber) {
            console.log("Number is higher");
        }
        else if (n > randomNumber) {
            console.log("Number is lower");
        }
        else{
            console.log(`${n} is not a number`); 
        }
        n = prompt(`Please guess again: `);   
    }
    console.log("Congrats, you have guessed the number!");
    let again = (prompt(`Would you like to play again? (Y/N)`)).toLowerCase();
    if (again === "y"){
        done = false;
    }
    else if (again === "n"){
        console.log("Thanks for playing!")
        done = true;
    }
    else {
        console.log(`Please enter "Y" for yes or "N" for no.`)
    }
}
