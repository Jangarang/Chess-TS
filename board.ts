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
    board[1]['e'].piece = initializePiece(
        PieceType.King,
        1,
        'e',
        Color.White
    )
    board[8]['e'].piece = initializePiece(
        PieceType.King,
        8,
        'e',
        Color.Black
    )
}

function initializeKnights(){
    board[1]['b'].piece = initializePiece(
        PieceType.Knight,
        1,
        'b',
        Color.White
    )
    board[1]['g'].piece = initializePiece(
        PieceType.Knight,
        1,
        'g',
        Color.White
    )

    board[8]['b'].piece = initializePiece(
        PieceType.Knight,
        8,
        'b',
        Color.Black
    )
    board[8]['g'].piece = initializePiece(
        PieceType.Knight,
        8,
        'g',
        Color.Black
    )
}

function initializeBishops(){
    board[1]['c'].piece = initializePiece(
        PieceType.Bishop,
        1,
        'c',
        Color.White
    )
    board[1]['f'].piece = initializePiece(
        PieceType.Bishop,
        1,
        'f',
        Color.White
    )
    board[8]['c'].piece = initializePiece(
        PieceType.Bishop,
        8,
        'c',
        Color.White
    )
    board[8]['f'].piece = initializePiece(
        PieceType.Bishop,
        8,
        'f',
        Color.White
    )
}

function initializeRooks(){
    board[1]['a'].piece = initializePiece(
        PieceType.Rook,
        1,
        'a',
        Color.White
    )
    board[1]['h'].piece = initializePiece(
        PieceType.Rook,
        1,
        'h',
        Color.White
    )
    board[8]['a'].piece = initializePiece(
        PieceType.Rook,
        8,
        'a',
        Color.Black
    )
    board[8]['h'].piece = initializePiece(
        PieceType.Rook,
        8,
        'h',
        Color.Black
    )

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
   initializeKings();
   initializeKnights();
   initializeRooks();
   initializeBishops();
}


export function displayBoard() {
    
    console.log(board);
}

initializePieces();
