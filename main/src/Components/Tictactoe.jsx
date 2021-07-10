import { SquareBoxes } from "./SquareBoxes";
import { useState, useEffect } from "react";
import { StyleGameCont, StyleSubGameCont } from "./style";
import Button from "@material-ui/core/Button";

function Tictactoe() {
  const initState = ["", "", "", "", "", "", "", "", ""];
  const [squareBoxesState, setSquareBoxesState] = useState(initState);
  const [isPlyrXChance, setIsPlyrXChance] = useState(true);
  const [checkWinner, setCheckWinner] = useState("");
  const [historyOfMoves, setHistOfMoves] = useState([]);
  const matrix = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  
  const handleUserClick = (index) => {
    let arryOfStates = squareBoxesState;
    arryOfStates[index] = isPlyrXChance ? "X" : "O";
    setIsPlyrXChance(!isPlyrXChance);
    setSquareBoxesState(arryOfStates);
    isPlyrXChance
      ? setHistOfMoves([...historyOfMoves, "X"])
      : setHistOfMoves([...historyOfMoves, "O"]);
    let winner = CheckTheWinner();
    setCheckWinner(winner);
    if (winner !== null) {
      clearGame();
    }
  };
  function clearGame() {
    setSquareBoxesState(initState);
    setHistOfMoves([]);
    
  }
  function CheckTheWinner() {
    for (var i = 0; i < matrix.length; i++) {
      let [a, b, c] = matrix[i];
      if (
        squareBoxesState[a] &&
        squareBoxesState[a] === squareBoxesState[b] &&
        squareBoxesState[a] === squareBoxesState[c]
      ) {
        console.log(
          squareBoxesState[a],
          squareBoxesState[b],
          squareBoxesState[c]
        );
        clearGame();
        return squareBoxesState[a];
      }
    }
    return null;
  }
  return (
    <>
      <StyleGameCont>
        <StyleSubGameCont>
          <div className="row">
            <SquareBoxes
              state={squareBoxesState[0]}
              handleUserClick={handleUserClick}
              index={0}
            ></SquareBoxes>
            <SquareBoxes
              state={squareBoxesState[1]}
              handleUserClick={handleUserClick}
              index={1}
            ></SquareBoxes>
            <SquareBoxes
              state={squareBoxesState[2]}
              handleUserClick={handleUserClick}
              index={2}
            ></SquareBoxes>
          </div>
          <div className="row">
            <SquareBoxes
              state={squareBoxesState[3]}
              handleUserClick={handleUserClick}
              index={3}
            ></SquareBoxes>
            <SquareBoxes
              state={squareBoxesState[4]}
              handleUserClick={handleUserClick}
              index={4}
            ></SquareBoxes>
            <SquareBoxes
              state={squareBoxesState[5]}
              handleUserClick={handleUserClick}
              index={5}
            ></SquareBoxes>
          </div>
          <div className="row">
            <SquareBoxes
              state={squareBoxesState[6]}
              handleUserClick={handleUserClick}
              index={6}
            ></SquareBoxes>
            <SquareBoxes
              state={squareBoxesState[7]}
              handleUserClick={handleUserClick}
              index={7}
            ></SquareBoxes>
            <SquareBoxes
              state={squareBoxesState[8]}
              handleUserClick={handleUserClick}
              index={8}
            ></SquareBoxes>
          </div>
        </StyleSubGameCont>
      </StyleGameCont>
      <Button variant="outlined" style={{backgroundColor:"rgb(43, 43, 6)",fontWeight:"bold"}} onClick={() => clearGame()}>
        Restart game
      </Button>
      {isPlyrXChance ? <h1>X Turn</h1> : <h1>O Turn</h1>}
      {/* {historyOfMoves.map((el, key) => {
        return <h3 key={key}>Player {el} moved</h3>
      })} */}
    </>
  );
}
export default Tictactoe;
