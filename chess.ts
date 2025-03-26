//import { processMove } from './moveProcessor.ts';
import { Move, NormalMove, CaptureMove} from './moveTypes';
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function handleInput(input: string){
    const moveRegex = /^([a-h][1-8])\s*->\s*([a-h][1-8])$/;
    const captureRegex = /^([a-h][1-8])\s*->\s*([a-h][1-8])\s*#\s*([a-h][1-8])$/;
    const promotionRegex = '//';

    let move: Move;

    // check for normal move 
    if (moveRegex.test(input)){
        //const match = 
    }


    // check for capture move 

    // check for promotion move



}

function startGame() {
    rl.question("Enter move (or type exit to quit):", (input) => {
        if (input.toLowerCase() === "exit") {
            rl.close();
            return;
        }
        handleInput(input);
        startGame();
    });

}