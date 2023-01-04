import React from "react";
import "./Chessboard.css";

const horizontalAxis = ["a", "b", "c", "d", "e", "f", "g", "h"];
const verticalAxis = ["1", "2", "3", "4", "5", "6", "7", "8"];

function Chessboard() {
  let board = [];

  for(let j = verticalAxis.length - 1; j >= 0; j--) {
    for(let i = 0; i < horizontalAxis.length; i++) {
      const squareNum = j + i + 2; // Add 2 since indices start at 0

      if(squareNum % 2 === 0) {
        board.push(
          <div className="coordinate dark-square"></div>
      )}

      else {
        board.push(
          <div className="coordinate light-square"></div>
      )}
    }
  }

  console.log("Chessboard", board);

  return <div className="Chessboard">{board}</div>
}

export default Chessboard;
