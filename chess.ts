import {PieceType, Color, Piece} from "./piece.js"

interface Cell {
    row: number;
    col: string;
    piece: Piece| null;
}

// const board: Cell[] = Array.from(["abcdefgh"], (letter) => ({
//     row: letter
// })); this creates a a value where its equal to abcdefgh [ { row: 'abcdefgh' } ]

// const board: Cell[][] = Array.from("abcdefgh", (letter) => 
//     Array.from({length: 8}, (_,colLen) => ({ // 
//         row: colLen + 1,
//         col: letter,
//         piece: null
//     }))
// )

const board: Cell[][] = Array.from({length: 8}, (_,colen) => 
    Array.from("abcedfgh", (letter) => ({
        row: colen + 1,
        col: letter,
        piece: null
    })))

//console.log(board[0]);

/** Initialize board */
function initializePawns(){

   
            //console.log(item);
            // let pawn: Piece;
            // pawn = {
            //     type: PieceType.Pawn,
            //     position: item.row + item.col,
            // } 

            for (let i =0; i < 8; i++){
                //board[i][1]
                //let pawn: Piece;
                const white_pawn: Piece  = {
                    type: PieceType.Pawn,
                    position: board[1][i].row + '2',
                    color: Color.White,
                    hasMoved: false
                }
                const black_pawn: Piece = {
                    type: PieceType.Pawn,
                    position: board[6][i].row + '7',
                    color: Color.Black,
                    hasMoved: false
                }
                board[1][i].piece = white_pawn;
                board[6][i].piece = black_pawn;
            }        

}

function initializePieces(type: PieceType, col: number, row: string, color: Color){
    const newPiece: Piece = {
        type: type,
        position: col + row,
        color: Color.White,
        hasMoved: false
    } 
    board[col]
};

function initializeBoard() {

}

/** Displaying board */

function isOdd(n:number): boolean {
    
    if ((n & 1) == 0){
        return false;
    }
    else {
        return true;
    }
}

function cellTopBottomDisplay(charac: string, extra: string, w: number):string {
    let disp: string = extra;
    disp += `${charac}`.repeat(w-2);
    disp += extra;
    disp += "\n";
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
            disp += '\n';
        }
    }
    disp += `${cellTopBottomDisplay('-',' ', w)}`;
    
    return disp;
}

function displayBoard() {
    
}

/** Print Statements */
initializePawns();
console.log(board);
//console.log(board[1][0]
//);

//initializePawns(false);

// Testing
//console.log(cellDisplay(false,9,5,'P'));