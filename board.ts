import { Piece, PieceType, Color } from "./piece";

export interface Cell {
    position: string;
    piece: Piece| null;
}

const board: {[key: number]: {[key: string]: Cell}} = Object.fromEntries(
    Array.from({length: 8}, (_,row) => [
        row,
        Object.fromEntries(
            Array.from('abcedfgh', (col) => [ //Why is the index of the character string being passed rather tha nthe character itself
                col,
                {position: `${col}${row}`, piece: null}
            ])
        )
    ])
);



/** Initialize board */
// function initializePawns(){

   
//             //console.log(item);
//             // let pawn: Piece;
//             // pawn = {
//             //     type: PieceType.Pawn,
//             //     position: item.row + item.col,
//             // } 

//             for (let i =0; i < 8; i++){
//                 //board[i][1]
//                 //let pawn: Piece;
//                 const white_pawn: Piece  = {
//                     type: PieceType.Pawn,
//                     position: board[1][i].row + '2',
//                     color: Color.White,
//                     hasMoved: false
//                 }
//                 const black_pawn: Piece = {
//                     type: PieceType.Pawn,
//                     position: board[6][i].row + '7',
//                     color: Color.Black,
//                     hasMoved: false
//                 }
//                 board[1][i].piece = white_pawn;
//                 board[6][i].piece = black_pawn;
//             }        
// }

function initializePiece(type: PieceType, col: number, row: string, color: Color){
    const newPiece: Piece = {
        type: type,
        position: col + row,
        color: Color.White,
        hasMoved: false
    } 
    board[col]
};

function initializePieces(){

}

export function initializeBoard() {

};

export function displayBoard() {
    console.log(board);
}