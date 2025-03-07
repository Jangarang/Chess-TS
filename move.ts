import {Piece, PromotionPiece} from "./piece.js";

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
