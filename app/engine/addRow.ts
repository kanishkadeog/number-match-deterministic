
export function addRowLogic(
  board: (number | null)[][],
  level: number,
  rescue: boolean
) {
  // Rescue row → force instant match
  if (rescue) {
    return [
      ...board,
      [5, 5, 4, 6, 3, 7, 2, 8, 1],
    ];
  }

  // Normal deterministic row
  const newRow = Array.from({ length: 9 }, (_, i) => {
    const val = ((i + level * 2) % 9) + 1;
    return val;
  });

  return [...board, newRow];
}



// export function addRowLogic(board: (number | null)[][], level: number) {
//   const newRow = Array.from({ length: 9 }, (_, i) => ((i + level) % 9) + 1);
//   return [...board, newRow];
// }
