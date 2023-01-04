import "./Square.css";
import { ISquare } from "../../interfaces";

function Square({ num, image }: ISquare) {
  console.log("Square", num);

  if(num % 2 === 0) {
    return (
    <div className="Square dark-square">
      <img className="chess-piece" src={image} alt="dark square"/>
    </div>
   )
  }
  else {
    return (
    <div className="Square light-square">
      <img className="chess-piece" src={image} alt="light square"/>
    </div>
    )
  }
}

export default Square;
