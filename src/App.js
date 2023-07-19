import Cell from "./Cell";
import TicTacToe from "./TicTacToe";

export default function App() {
  return (
    <>
      <TicTacToe
        boardSize={3}
        cellRender={(key, cellIndex, mark, cellDisabled, onClick) => (
          <Cell
            key={key}
            cellIndex={cellIndex}
            mark={mark}
            cellDisabled={cellDisabled}
            onClick={onClick}
          />
        )}
      />
    </>
  );
}
