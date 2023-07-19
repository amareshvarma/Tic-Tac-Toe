const determineWinner = (board, index, boardSize) => {
  const row = Math.floor(index / boardSize);
  const column = index % boardSize;

  const rowItems = [];
  for (let i = 0; i < boardSize; i++) {
    rowItems.push(board[row * boardSize + i]);
  }

  const columnItems = [];
  for (let j = 0; j < boardSize; j++) {
    columnItems.push(board[j * boardSize + column]);
  }
  const lines = [rowItems, columnItems];

  // console.log(lines);

  for (const line of lines) {
    // if(line)

    const player = line[0];
    if (player == null) continue;

    const winner = line.every((item) => item !== null && item === player);

    if (winner) return player;
  }
  return null;
};

export default determineWinner;
