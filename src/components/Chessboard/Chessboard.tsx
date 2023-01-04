import "./Chessboard.css";
import Square from "../Square/Square";
import { IPiece } from "../../interfaces";

const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];

const pieces: IPiece[] = [];

for(let p = 0; p < 2; p++) {
  const type = p === 0 ? "black" : "white";
  const y = p === 0 ? 7 : 0;

  pieces.push({image: `assets/images/chess-${type}-rook.png`, x: 0, y})
  pieces.push({image: `assets/images/chess-${type}-knight.png`, x: 1, y})
  pieces.push({image: `assets/images/chess-${type}-bishop.png`, x: 2, y})
  pieces.push({image: `assets/images/chess-${type}-queen.png`, x: 3, y})
  pieces.push({image: `assets/images/chess-${type}-king.png`, x: 4, y})
  pieces.push({image: `assets/images/chess-${type}-bishop.png`, x: 5, y})
  pieces.push({image: `assets/images/chess-${type}-knight.png`, x: 6, y})
  pieces.push({image: `assets/images/chess-${type}-rook.png`, x: 7, y})
}

for(let i = 0; i < 8; i++) {
  pieces.push({image: "assets/images/chess-black-pawn.png", x: i, y: 6})
}
for(let i = 0; i < 8; i++) {
  pieces.push({image: "assets/images/chess-white-pawn.png", x: i, y: 1})
}

function Chessboard() {
  let board = [];

  for(let j = verticalAxis.length - 1; j >= 0; j--) {
    for(let i = 0; i < horizontalAxis.length; i++) {
      const squareNum = j + i + 2; // Add 2 since indices start at 0
      let image = "";

      for(const piece of pieces) {
        if(piece.x === i && piece.y === j) {
          image = piece.image;
        }
      }

      board.push(
        <Square num={squareNum} image={image} />
      );
    }
  }

  console.log("Chessboard", board);

  return <div className="Chessboard">{board}</div>
}

export default Chessboard;
