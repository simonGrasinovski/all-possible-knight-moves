const ALL_CHESS_SQUARES = [
  'A1', 'A2', 'A3', 'A4', 'A5', 'A6', 'A7', 'A8',
  'B1', 'B2', 'B3', 'B4', 'B5', 'B6', 'B7', 'B8',
  'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'C7', 'C8',
  'D1', 'D2', 'D3', 'D4', 'D5', 'D6', 'D7', 'D8',
  'E1', 'E2', 'E3', 'E4', 'E5', 'E6', 'E7', 'E8',
  'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8',
  'G1', 'G2', 'G3', 'G4', 'G5', 'G6', 'G7', 'G8',
  'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'H7', 'H8',
];

const showPossibleMoves = square => {
  const x = parseInt(square.substring(0, 1).charCodeAt() - 64);
  const y = parseInt(square.substring(1, 2));

  const allKnightDirections = [
    { x: 2, y: -1 },
    { x: 2, y: 1 },
    { x: 1, y: -2 },
    { x: 1, y: 2 },
    { x: -2, y: -1 },
    { x: -2, y: 1 },
    { x: -1, y: -2 },
    { x: -1, y: 2 },
  ];

  const possibleMoves = [];
  for (const coords of allKnightDirections) {
    const row = String.fromCharCode(x + coords.x + 64);
    const column = y + coords.y;
    possibleMoves.push(row + '' + column);
  }
  
  console.log('Chosen square', square);
  return possibleMoves.filter(move => ALL_CHESS_SQUARES.includes(move));
};

const randomIndex = Math.floor(Math.random() * ALL_CHESS_SQUARES.length);
console.log(showPossibleMoves(ALL_CHESS_SQUARES[randomIndex]));
