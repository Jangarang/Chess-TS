import { processMove } from './moveProcessor';
import { movePiece } from './pieceMovement';
import { Move, NormalMove, CaptureMove} from './moveTypes';

import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function handlePlayerMove(){

}

function startGame() {
    rl.question("Enter move (or type exit to quit):", (input) => {
        if (input.toLowerCase() === "exit") {
            rl.close();
            return;
        }
        processMove(input);
        
        startGame();
    });

    //const move = processMove

}