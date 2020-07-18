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

let spots = []
for (let i=1; i<4; i++){
    for (let j=1; j<4; j++){
        spots.push({x:i, y:j, value:' '})
    }
}

let prompt = require('prompt-sync')();
let done = false;
console.clear();

while (!done){
    let turn = "X";
    let won = false;
    let nturns = 1;
    console.log('Welcome to Tic-Tac-Toe!');
    board();
    while (!won){
        let x,y=0;
        let valid = false;
        console.log(`It's ${turn}'s turn`);
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
        for (let i=0; i<spots.length; i++){
            if ((spots[i].x == x) && (spots[i].y == y)){
                if (spots[i].value === ' '){
                    spots[i].value = `${turn}`;
                    console.clear();
                    board();
                    if (turn === "X"){
                        turn = "O";
                    }
                    else {
                        turn = "X";
                    }
                } 
                else {
                    console.log('Spot already taken. Please choose again.');
                }
            }
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
            if (turn === "O"){
                console.log(`Congrats, X won!`);
                won = true;
            }
            else {
                console.log(`Congrats, O won!`);
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
