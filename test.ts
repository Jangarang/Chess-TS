import {PieceType, Color, Piece} from "./piece.js";
import { Cell } from './board.js'

// const board1: {[key: string]: string} = 
// {
//     "1": "one",
//     "2": "two"
// };

const board: Cell[][] = Array.from({length: 8}, (_,colen) => 
    Array.from("abcedfgh", (letter) => ({
        position:`${colen}${letter}`,
        piece: null
})))


const p1: Piece = {
    type: PieceType.Pawn,
    position: 'a2',
    color: Color.White,
    hasMoved: false
}

const board2: {[key: number]: {[key: string]: Cell}} = Object.fromEntries(
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

// Object.entries(board[0]).forEach(([key,value]) => {

// });

/********************* map => () */

// Object.entries(board2[1]).map(([key,value]) => {
//     (   
//         [key, value.piece = {
//         type: PieceType.Pawn,
//         position: value.position,
//         color: Color.White,
//         hasMoved: false,
//         },
//         {...value}
//         ] // because this creates an array of [ , , ] of three values. The third array gets a new copy of value after mutation
//     [2])
// });



// Object.entries(board2[0]).map(([key, value]) => 
//     ([key, value.piece = {
//         type: PieceType.Pawn,
//         position: value.position,
//         color: Color.White,
//         hasMoved: false,
//     }, {...value}][2])
// )

/********************* map => [] */

// Object.entries(board2[0]).map(([key,value]) => [
//     key, value.piece = {
//         type: PieceType.Pawn,
//         position: value.position,
//         color: Color.White,
//         hasMoved: false,
//     },
//     {...value}
// ]) // Returns an array but since its being used against board2 its just mutating it. 

/* WTF????????????? WHY DOES THIS MUTATE???*/

// Object.entries(board2[0]).map(([key,value]) => [
//     key, {...value, piece: value.piece = p1} // what the fuck does this do? Holy shit aam i stupid!
// ])  // What the = returns the value of p1


/* WTF?????????*/            
//     Object.entries(board[0]).map(([key, value]) => [key, (() => {
//     const p1: Piece = {
//         type: PieceType.Pawn,
//         position: value.position,
//         color: Color.White,
//         hasMoved: false
//     };
    
   
//     return [key, {...value, piece: p1}];
// })]

// )      

//console.log(board1);
//console.log(board);
//console.log(board2);

console.log(board2[1]['h'].piece);


// const displayBoard: string[] = Array.from( {length: 8}, (_,index) => {
//     return `Cell ${index + 1}`

// })

// const displayBoard: string[][] = Array.from({ length: 8 }, (_, row) =>
//     Array.from({ length: 8 }, (_, col) => {
//         const isWhite = (row + col) % 2 === 0;
//         const piece = board[row][col] || " "; // Get piece or empty cell
//         return cellDisplay(isWhite, 5, 3, piece); // Cell width 5, height 3
//     })
// );

