export enum PieceType {
    Pawn,
    Rook,
    Knight,
    Bishop,
    King,
    Queen
}

export type PromotionPiece = PieceType.Rook | PieceType.Knight | PieceType.Bishop | PieceType.Queen;

export enum Color {
    White,
    Black
}

export interface Piece {
    type: PieceType;
    position: string;
    color: Color;
    hasMoved?: boolean;
}