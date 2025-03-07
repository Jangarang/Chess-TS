enum PieceType {
    Pawn,
    Rook,
    Knight,
    Bishop,
    King,
    Queen
}

type PromotionPiece = PieceType.Rook | PieceType.Knight | PieceType.Bishop | PieceType.Queen;

enum Color {
    White,
    Black
}

interface Cell {
    row: string;
    col: number;
}

interface Piece {
    type: PieceType;
    position: string;
    color: Color;
    hasMoved?: boolean;
}

interface NormalMove {
    piece: Piece;
    from: string;
    to: string; 
    //capturedPiece?: Piece;
    //promotion?: PieceType;
}

interface CaptureMove extends NormalMove{
    capturedPiece: Piece
}

interface CastlingMove extends NormalMove{
    kingSide: boolean;
    rookFrom: string;
    rookTo: string;
};

interface PromotionMove extends NormalMove{
    promotedTo: PromotionPiece
}

interface EnPassantMove extends NormalMove{
    capturePawn: string;
}

// Discriminatory Union of all move types
type move = NormalMove | CaptureMove | CastlingMove | PromotionMove | EnPassantMove


// const board: Cell[] = Array.from(["abcdefgh"], (letter) => ({
//     row: letter
// })); this creates a a value where its equal to abcdefgh [ { row: 'abcdefgh' } ]

const board: Cell[][] = Array.from("abcdefgh", (letter) => 
    Array.from({length: 8}, (_,colLen) => ({ // 
        row: letter,
        col: colLen +1
    }))
)

/** Initialize board */

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

console.log(board);
// Testing
//console.log(cellDisplay(false,9,5,'P'));