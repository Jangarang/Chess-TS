import { Piece, PieceType, Color } from "./piece";

export interface Cell {
    position: string;
    piece: Piece| null;
}

export const board: {[key: number]: {[key: string]: Cell}} = Object.fromEntries(
    Array.from({length: 8}, (_,row) => [
        row+1,
        Object.fromEntries(
            Array.from('abcedfgh', (col) => [ //Why is the index of the character string being passed rather tha nthe character itself
                col,
                {position: `${col}${row}`, piece: null}
            ])
        )
    ])
);

 function initializePawns(){
    Object.entries(board[2]).map(([key,value]) => {
        (   
            [key, value.piece = {
            type: PieceType.Pawn,
            position: value.position,
            color: Color.White,
            hasMoved: false,
            },
            {...value}
            ] // because this creates an array of [ , , ] of three values. The third array gets a new copy of value after mutation
        [2])
    });

    Object.entries(board[7]).map(([key,value]) => {
    (   
        [key, value.piece = {
        type: PieceType.Pawn,
        position: value.position,
        color: Color.Black,
        hasMoved: false,
        },
        {...value}
        ] // because this creates an array of [ , , ] of three values. The third array gets a new copy of value after mutation
    [2])
    });
}

function initializeQueens(){
    board[1]['d'].piece = initializePiece(
        PieceType.Queen,
        1,
        'd',
        Color.White
    );

    board[8]['d'].piece = initializePiece(
        PieceType.Queen,
        8,
        'd',
        Color.Black
    );

}

function initializeKings(){

}

function initializeKnights(){

}

function initializeBishops(){

}

function initializeRooks(){

}

function initializePiece(type: PieceType, col: number, row: string, color: Color): Piece{
    const newPiece: Piece = {
        type: type,
        position: col + row,
        color: color,
        hasMoved: false
    } 
    return newPiece;
};

function initializePieces(){
   initializePawns();
   initializeQueens();
}


export function displayBoard() {
    
    console.log(board);
}

initializePieces();

//console.log(board);
//console.log(Object.keys(board[1]).length);
