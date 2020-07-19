function board(x,y){
    console.log('    1   2   3 ');
    console.log('  -------------');
    console.log(`1 | ${spots[0].value} | ${spots[1].value} | ${spots[2].value} |`);
    console.log('  -------------');
    console.log(`2 | ${spots[3].value} | ${spots[4].value} | ${spots[5].value} |`);
    console.log('  -------------');
    console.log(`3 | ${spots[6].value} | ${spots[7].value} | ${spots[8].value} |`);
    console.log('  -------------');
}

function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

let spots = [] // [{x:1,y:1,value:' '}.{x:1,y:2,value:' '}...]
for (let i=1; i<4; i++){
    for (let j=1; j<4; j++){
        spots.push({x:j, y:i, value:' '})
    }
}

let prompt = require('prompt-sync')();
let done = false;
console.clear();

while (!done){
    let turn = 0;
    let won = false;
    let nturns = 1;
    let players = []
    console.log('Welcome to Tic-Tac-Toe!');
    let numplayers = prompt('Are there 1 or 2 players? ');
    console.log('X goes first');
    if (numplayers == 1){
        let playerSymbol = prompt('Would you like to be the X or the O? ').toLowerCase();
        if (playerSymbol === 'x'){
            players.push({player:"player1", symbol:"X"});
            players.push({player:"computer", symbol:"O"});
        }
        else {
            players.push({player:"computer", symbol:"X"});
            players.push({player:"player2", symbol:"O"});
        }
    } else {
        players.push({player:"player1", symbol:"X"});
        players.push({player:"player2", symbol:"O"});
    }
    console.log(players);
    // console.clear();
    board();
    while (!won){
        let x,y=0;
        let valid = false;
        let available = false;
        console.log(turn);
        console.log(`It's ${players[turn].player}'s turn`);
        console.log(turn);
        if (players[turn].player !== "computer"){
            while (!valid){
                x = prompt(`Enter an X coordinate: `);
                y = prompt(`Enter an Y coordinate: `);
                console.log(x,y);
                if (((x==1) || (x==2) || (x==3)) && ((y==1) || (y==2) || (y==3))){
                    valid = true;
                }
                else{
                    console.log('Invalid Responce. Please enter values 1, 2, or 3.')
                }
            }
            while (!available){
                for (let i=0; i<spots.length; i++){
                    if ((spots[i].x == x) && (spots[i].y == y)){
                        if (spots[i].value === ' '){
                            spots[i].value = `${players[turn].symbol}`;
                            available=true;
                        } 
                        else {
                            console.log('Spot already taken. Please choose again.');
                            x = prompt(`Enter an X coordinate: `);
                            y = prompt(`Enter an Y coordinate: `);
                        }
                    }
                } 
            }
            
         } else {
            while (!available){
                x = getRandomInt(3)+1;
                y = getRandomInt(3)+1;
                for (let i=0; i<spots.length; i++){
                    if ((spots[i].x == x) && (spots[i].y == y)){
                        if (spots[i].value === ' '){
                            spots[i].value = `${players[turn].symbol}`;
                            available = true
                        } 
                    }
                } 
            }
        }
        // issue with choosing already taken spot
        
        console.clear();
        board();
        if (turn === 0){
            turn = 1;
        }
        else {
            turn = 0;
        }
        if ((((spots[0].value === 'X') && (spots[1].value === 'X') && (spots[2].value === 'X')) ||
            ((spots[3].value === 'X') && (spots[4].value === 'X') && (spots[5].value === 'X')) ||
            ((spots[6].value === 'X') && (spots[7].value === 'X') && (spots[8].value === 'X')) ||
            ((spots[0].value === 'X') && (spots[3].value === 'X') && (spots[6].value === 'X')) ||
            ((spots[1].value === 'X') && (spots[4].value === 'X') && (spots[7].value === 'X')) ||
            ((spots[2].value === 'X') && (spots[5].value === 'X') && (spots[8].value === 'X')) ||
            ((spots[0].value === 'X') && (spots[4].value === 'X') && (spots[8].value === 'X')) ||
            ((spots[2].value === 'X') && (spots[4].value === 'X') && (spots[6].value === 'X')) ||
            ((spots[0].value === 'O') && (spots[1].value === 'O') && (spots[2].value === 'O')) ||
            ((spots[3].value === 'O') && (spots[4].value === 'O') && (spots[5].value === 'O')) ||
            ((spots[6].value === 'O') && (spots[7].value === 'O') && (spots[8].value === 'O')) ||
            ((spots[0].value === 'O') && (spots[3].value === 'O') && (spots[6].value === 'O')) ||
            ((spots[1].value === 'O') && (spots[4].value === 'O') && (spots[7].value === 'O')) ||
            ((spots[2].value === 'O') && (spots[5].value === 'O') && (spots[8].value === 'O')) ||
            ((spots[0].value === 'O') && (spots[4].value === 'O') && (spots[8].value === 'O')) ||
            ((spots[2].value === 'O') && (spots[4].value === 'O') && (spots[6].value === 'O'))) === true)
        {   
            if (turn === 0){
                console.log(`Congrats, ${players[1].player} won!`);
                won = true;
            }
            else {
                console.log(`Congrats, ${players[0].player} won!`);
                won = true;
            }     
        }
        else if (nturns === 9){
            console.log(`It's a Draw!`);
            won = true;
        }
        nturns++;
    }
    let again = (prompt(`Would you like to play again? (Y/N)`)).toLowerCase();
    if (again === "y"){
        for (let i=0; i<9; i++){
            spots[i].value = ' ';
        }
        console.clear();
    }
    else if (again === "n"){
        console.log("Thanks for playing!")
        done = true;
    }
    else {
        console.log(`Please enter "Y" for yes or "N" for no.`)
    }
}
