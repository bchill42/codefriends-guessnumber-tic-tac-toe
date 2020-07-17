function board(x,y){
    console.log('    1   2   3 ');
    console.log('  -------------');
    console.log(`1 |${spots[0].value}|${spots[1].value}|${spots[2].value}|`);
    console.log('  -------------');
    console.log(`2 |${spots[3].value}|${spots[4].value}|${spots[5].value}|`);
    console.log('  -------------');
    console.log(`3 |${spots[6].value}|${spots[7].value}|${spots[8].value}|`);
    console.log('  -------------');
}

let prompt = require('prompt-sync')();
let done = false;
console.clear();
console.log('Welcome to Tic-Tac-Toe!');

let spots = [
    {   x:1,
        y:1,
        value: '   '
    },
    {   x:2,
        y:1,
        value: '   '
    },
    {   x:3,
        y:1,
        value: '   '
    },
    {   x:1,
        y:2,
        value: '   '
    },
    {   x:2,
        y:2,
        value: '   '
    },
    {   x:3,
        y:2,
        value: '   '
    },
    {   x:1,
        y:3,
        value: '   '
    },
    {   x:2,
        y:3,
        value: '   '
    },
    {   x:3,
        y:3,
        value: '   '
    }
]
// let winningOptions = [[spot[0].value,spot[1].value,spot[2].value],[spot[3].value,spot[4].value,spot[5].value]]
// [3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6];
let turn = "X";
let won = false;
while (!done){
    board();
    while (!won){
        console.log(`It's ${turn}'s turn`);
        let x = prompt(`Enter an X coordinate: `);
        let y = prompt(`Enter an Y coordinate: `);
        for (let i=0; i<spots.length; i++){
            if ((spots[i].x == x) && (spots[i].y == y)){
                if (spots[i].value === '   '){
                    spots[i].value = ` ${turn} `;
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
        if ((spots[0].value === spots[1].value) && (spots[1].value === spots[2].value)){
            console.log(`Congrats, ${spots[0].value} won!`);
            won = true;
        }

    }
    let again = (prompt(`Would you like to play again? (Y/N)`)).toLowerCase();
    if (again === "y"){
        for (let i=0; i<8; i++){
            spots[i].value = '   ';
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
