import { useRef, useState, useLayoutEffect } from "react";
import "./styles.css";
import determineWinner from "./util";

const TicTacToe = ({ boardSize, cellRender }) => {
  const [board, setBoard] = useState(
    Array.from({ length: boardSize * boardSize }).fill(null)
  );
  const [winner, setWinner] = useState(null);
  const [playing, setIsPlaying] = useState(true);
  const player = playing ? "X" : "O";
  const boardRef = useRef();
  console.log(board);

  const handleCellClick = (cellIndex) => {
    // set
    const boardCopy = [...board];
    boardCopy[cellIndex] = player;
    setBoard(boardCopy);
    setIsPlaying((prevState) => !prevState);
    setWinner(determineWinner(boardCopy, cellIndex, boardSize));
  };

  useLayoutEffect(() => {
    boardRef.current.style.setProperty("--board-size", boardSize);
  }, [boardSize]);

  const getMessage = () => {
    if (winner != null) return `Player ${winner} is the Winner`;

    if (!board.includes(null)) return `It is a draw`;

    return `Current Player is ${player}`;
  };

  return (
    <>
      <div className="board" ref={boardRef}>
        {board.map((elem, index) =>
          cellRender(index, index, elem, elem !== null || winner !== null, () =>
            handleCellClick(index)
          )
        )}
      </div>
      {getMessage()}
    </>
  );
};

export default TicTacToe;
