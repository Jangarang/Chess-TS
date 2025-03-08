// import {PieceType, Color, Piece} from "./piece.js";
// import { Cell } from './board.js'

// // const board1: {[key: string]: string} = 
// // {
// //     "1": "one",
// //     "2": "two"
// // };

// const board: Cell[][] = Array.from({length: 8}, (_,colen) => 
//     Array.from("abcedfgh", (letter) => ({
//         position:`${colen}${letter}`,
//         piece: null
// })))


// const p1: Piece = {
//     type: PieceType.Pawn,
//     position: 'a2',
//     color: Color.White,
//     hasMoved: false
// }

// const board2: {[key: number]: {[key: string]: Cell}} = Object.fromEntries(
//     Array.from({length: 8}, (_,row) => [
//         row,
//         Object.fromEntries(
//             Array.from('abcedfgh', (col) => [ //Why is the index of the character string being passed rather tha nthe character itself
//                 col,
//                 {position: `${col}${row}`, piece: null}
//             ])
//         )
//     ])
// );


// //console.log(board1);
// //console.log(board);
// console.log(board2);