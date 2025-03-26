import { MoveTypes } from './moveTypes'; 

export function processMove(input:string){
    const moveRegex = /^([a-h][1-8])\s*->\s*([a-h][1-8])$/;
    const captureRegex = /^([a-h][1-8])\s*->\s*([a-h][1-8])\s*#\s*([a-h][1-8])$/;

    if (moveRegex.test(input)) {
        return MoveTypes.Normal;
    }

    if (captureRegex.test(input)){
        return MoveTypes.Capture;
    }
    else {
        //console.log("Invalid move. Please try again");
        return MoveTypes.Invalid; 
    }

}

function normalMove(){
    
}

function captureMove(){
    

}

function promoteMove(){

}