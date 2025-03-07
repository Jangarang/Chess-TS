"use strict";
var PieceType;
(function (PieceType) {
    PieceType[PieceType["Pawn"] = 0] = "Pawn";
    PieceType[PieceType["Rook"] = 1] = "Rook";
    PieceType[PieceType["Knight"] = 2] = "Knight";
    PieceType[PieceType["Bishop"] = 3] = "Bishop";
    PieceType[PieceType["King"] = 4] = "King";
    PieceType[PieceType["Queen"] = 5] = "Queen";
})(PieceType || (PieceType = {}));
var Color;
(function (Color) {
    Color[Color["White"] = 0] = "White";
    Color[Color["Black"] = 1] = "Black";
})(Color || (Color = {}));
;
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
const board = Array.from({ length: 8 }, (_, colen) => Array.from("abcedfgh", (letter) => ({
    row: colen + 1,
    col: letter,
    piece: null
})));
//console.log(board[0]);
/** Initialize board */
function initializePawns() {
    //console.log(item);
    // let pawn: Piece;
    // pawn = {
    //     type: PieceType.Pawn,
    //     position: item.row + item.col,
    // } 
    for (let i = 0; i < 8; i++) {
        //board[i][1]
        //let pawn: Piece;
        const white_pawn = {
            type: PieceType.Pawn,
            position: board[1][i].row + '2',
            color: Color.White,
            hasMoved: false
        };
        const black_pawn = {
            type: PieceType.Pawn,
            position: board[6][i].row + '7',
            color: Color.Black,
            hasMoved: false
        };
        board[1][i].piece = white_pawn;
        board[6][i].piece = black_pawn;
    }
}
function initializePieces(type, col, row, color) {
    const newPiece = {
        type: type,
        position: col + row,
        color: Color.White,
        hasMoved: false
    };
    board;
}
;
function initializeBoard() {
}
/** Displaying board */
function isOdd(n) {
    if ((n & 1) == 0) {
        return false;
    }
    else {
        return true;
    }
}
function cellTopBottomDisplay(charac, extra, w) {
    let disp = extra;
    disp += `${charac}`.repeat(w - 2);
    disp += extra;
    disp += "\n";
    return disp;
}
function cellDisplay(isWhite, w, h, piece) {
    let disp = cellTopBottomDisplay('_', ' ', w);
    if (isWhite) {
        for (let i = 1; i < h - 1; i++) {
            if (i === (Math.floor(h / 2))) {
                disp += '|';
                disp += '@'.repeat(Math.floor((w / 2) - 2));
                disp += ` ${piece} `;
                disp += '@'.repeat(Math.floor((w / 2) - 2));
                disp += '|';
            }
            else {
                disp += '|';
                disp += '@'.repeat(w - 2);
                disp += '|';
            }
            disp += '\n';
        }
    }
    else {
        for (let i = 1; i < h - 1; i++) {
            if (i === (Math.floor(h / 2))) {
                disp += '|';
                disp += ' '.repeat(Math.floor((w / 2) - 2));
                disp += ` ${piece} `;
                disp += ' '.repeat(Math.floor((w / 2) - 2));
                disp += '|';
            }
            else {
                disp += '|';
                disp += ' '.repeat(w - 2);
                disp += '|';
            }
            disp += '\n';
        }
    }
    disp += `${cellTopBottomDisplay('-', ' ', w)}`;
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
