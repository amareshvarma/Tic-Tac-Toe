import { memo } from "react";
import "./Cell.css";

const Cell = memo(({ cellDisabled, mark, onClick }) => {
  return (
    <button className="cell" disabled={cellDisabled} onClick={onClick}>
      {mark}
    </button>
  );
});

export default Cell;
