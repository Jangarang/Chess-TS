import { getBoard } from "./board";
/** Displaying board */

// const displayBoard: string[][] = Array.from({ length: 8 }, (_, row) =>
//     Array.from({ length: 8 }, (_, col) => {
//         const isWhite = (row+1 + col) % 2 === 0;
//         const asciCol = String.fromCharCode(97 + col);
//         const piece = board[row+1][asciCol].piece?.type || " "; // Get piece or empty cell
//         return cellDisplay(isWhite, 5, 3, piece); // Cell width 5, height 3
//     })
// );

let board = getBoard();

function cellTopBottomDisplay(charac: string, extra: string, extraLine: boolean, w: number):string {
    let disp: string = extra;
    disp += `${charac}`.repeat(w-2);
    if (extraLine) {
        disp += "\n";
    }        
    return disp;
}

function cellDisplay(isWhite: boolean, w:number, h:number, piece: string):string {
    let disp = "";
    //let disp: string = cellTopBottomDisplay('_', ' ', w);

    if (isWhite){
        for (let i = 1; i < h-1; i++){
            if (i === (Math.floor(h / 2))){
                disp += '|';
                disp += '@'.repeat(Math.floor((w / 2)-2));
                disp += ` ${piece} `;
                disp += '@'.repeat(Math.floor((w / 2)-2));
                //disp += '|';
            }else {
                disp += '|';
                disp +=  '@'.repeat(w-2);
                //disp += '|';
            }
            // if (i !== h - 2) {
            //     disp += '\n';
            // }
            
            disp += '\n';
        }
        

    } else{
        for (let i = 1; i < h-1; i++){
            if (i === (Math.floor(h / 2))){
                disp += '|';
                disp += ' '.repeat(Math.floor((w / 2)-2));
                disp += ` ${piece} `;
                disp += ' '.repeat(Math.floor((w / 2)-2));
                //disp += '|';

            }else {
                disp += '|';
                if (i == 3) {
                    disp += cellTopBottomDisplay('_', '', false, w);
                }
                else {
                    disp +=  ' '.repeat(w-2);
                }
                //disp += '|';
            }
            // if (i !== h - 2) {
            //     disp += '\n';
            // }
            
            disp += '\n';
        }
    }
    //disp += `${cellTopBottomDisplay('-',' ', w)}`;
    
    return disp;
}

export function displayBoard() {
    let boardDisplay: string[] = [];

    for (let row = 1; row < 9; row++) {
        let rowCells = [];
        
        for (let col = 1; col < 9; col++) {
            let asciCol = String.fromCharCode(96 + col);
            //const pieceColor = board[row][asciCol].piece?.color;
            const pieceType = board[row][asciCol].piece?.type || " ";
            let isWhite = true;
            if ( row % 2 !== 0) {
                if ( col % 2 == 0) {
                    isWhite = false
                }
                else {
                    isWhite = true;
                }
            }
            else {
                if ( col % 2 !== 0) {
                    isWhite = false
                }
                else {
                    isWhite = true;
                }
            }
            let cellStr = cellDisplay(isWhite, 9, 5, pieceType);
            
            // Convert cell string into an array of lines
            //console.log(cellStr)
            let cellLines = cellStr.split("\n");
            //console.log(cellLines);
            if (cellLines[cellLines.length - 1] === "") {
                cellLines.pop();
            }
            rowCells.push(cellLines);
        }
        //console.log(rowCells);
        let count = 0;
    
        // Merge the rowCells horizontally without extra spaces between cells
        let mergedRow = rowCells[0].map((_, i) => 
            rowCells.map(cell => cell[i]).join('')
        );

        // Add to final board display
        boardDisplay.push(...mergedRow);

    }
    //console.log(boardDisplay);
    console.log(boardDisplay.join("\n"));
}


displayBoard();