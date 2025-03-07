const board1: {[key: string]: string} = 
{
    "1": "one",
    "2": "two"
};

const p1: Piece = {
    type: PieceType.Pawn,
    position: 'a2',
    color: Color.White,
    hasMoved: false
}

const board2: {[key: number]: {[key: string]: Piece}} = {
    1: {
         'a': p1    
        }
} 


console.log(board1);