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
const board = Array.from("abcdefgh", (letter) => Array.from({ length: 8 }, (_, colLen) => ({
    row: letter,
    col: colLen + 1
})));
/** Initialize board */
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
/** Print Statements */
console.log(board);
// Testing
//console.log(cellDisplay(false,9,5,'P'));
