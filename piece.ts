export enum PieceType {
    Pawn = "P",
    Rook = "R",
    Knight = "K",
    Bishop = "B",
    King = "K",
    Queen = "Q" 
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