export function noValidMoves(board: (number | null)[][]): boolean {
  const flat = board.flat().filter(Boolean) as number[];
  return flat.length < 2;
}
