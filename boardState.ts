import { board } from "./board";
import { Piece, PieceType, Color } from "./piece";
/** Displaying board */

// const displayBoard: string[][] = Array.from({ length: 8 }, (_, row) =>
//     Array.from({ length: 8 }, (_, col) => {
//         const isWhite = (row+1 + col) % 2 === 0;
//         const asciCol = String.fromCharCode(97 + col);
//         const piece = board[row+1][asciCol].piece?.type || " "; // Get piece or empty cell
//         return cellDisplay(isWhite, 5, 3, piece); // Cell width 5, height 3
//     })
// );



function cellTopBottomDisplay(charac: string, extra: string, w: number):string {
    let disp: string = extra;
    disp += `${charac}`.repeat(w-2);
    disp += extra;
    //disp += "\n";
    return disp;
}

function cellDisplay(isWhite: boolean, w:number, h:number, piece: string):string {
    let disp: string = cellTopBottomDisplay('_', ' ', w);
    if (isWhite){
        for (let i = 1; i < h-1; i++){
            if (i === (Math.floor(h / 2))){
                disp += '|';
                disp += '@'.repeat(Math.floor((w / 2)-2));
                disp += ` ${piece} `;
                disp += '@'.repeat(Math.floor((w / 2)-2));
                disp += '|';
            }else {
                disp += '|';
                disp +=  '@'.repeat(w-2);
                disp += '|';
            }
            // if (i !== h - 2) {
            //     disp += '\n';
            // }
            disp += '\n';
        }
        

    } else{
        for (let i = 1; i < h-1; i++){
            if (i === (Math.floor(h / 2))){
                disp += '|';
                disp += ' '.repeat(Math.floor((w / 2)-2));
                disp += ` ${piece} `;
                disp += ' '.repeat(Math.floor((w / 2)-2));
                disp += '|';
            }else {
                disp += '|';
                disp +=  ' '.repeat(w-2);
                disp += '|';
            }
            // if (i !== h - 2) {
            //     disp += '\n';
            // }
            disp += '\n';
        }
    }
    disp += `${cellTopBottomDisplay('-',' ', w)}`;
    
    return disp;
}

function rowDisplay(){
    
}


function displayBoard(){
    let boardDisplay = ''; // Initialize the full board display
    for (let row = 1; row < 9; row++){
         let rowDisplay = ''; // Store the current row's display
        for (let col = 1; col < 9; col++) {
            let asciCol = String.fromCharCode(96 + col);
            const pieceColor =  board[row][asciCol].piece?.color;
          //  console.log(row);
            //console.log(asciCol);
            const pieceType = board[row][asciCol].piece?.type || " ";
            let color = false; 
            if (pieceColor == Color.White){
                color = true;
            }
            rowDisplay += cellDisplay(color, 9, 5, pieceType);
           
        }
        //boardDisplay += rowDisplay + '\n'; // Add a new line after each rowconsole.log('\n');
        process.stdout.write(rowDisplay + '\n');
    }
    //console.log(boardDisplay);
}
console.log(board);
// console.log(displayBoard);
displayBoard();
