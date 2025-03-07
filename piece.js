"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Color = exports.PieceType = void 0;
var PieceType;
(function (PieceType) {
    PieceType[PieceType["Pawn"] = 0] = "Pawn";
    PieceType[PieceType["Rook"] = 1] = "Rook";
    PieceType[PieceType["Knight"] = 2] = "Knight";
    PieceType[PieceType["Bishop"] = 3] = "Bishop";
    PieceType[PieceType["King"] = 4] = "King";
    PieceType[PieceType["Queen"] = 5] = "Queen";
})(PieceType || (exports.PieceType = PieceType = {}));
var Color;
(function (Color) {
    Color[Color["White"] = 0] = "White";
    Color[Color["Black"] = 1] = "Black";
})(Color || (exports.Color = Color = {}));
