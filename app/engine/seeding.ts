
import { difficultyForLevel } from "./difficulty";

export function seedBoard(level: number): number[][] {
  const density = difficultyForLevel(level);
  const board: number[][] = [];

  for (let r = 0; r < 3; r++) {
    const row: number[] = [];
    for (let c = 0; c < 9; c++) {
      const base = ((r + c + level) % 9) + 1;
      row.push(Math.random() < density ? base : 10 - base);
    }
    board.push(row);
  }

  return board;
}



// import { difficultyForLevel } from "./difficulty";

// export function seedBoard(level: number): number[][] {
//   const density = difficultyForLevel(level);
//   const board: number[][] = [];

//   for (let r = 0; r < 3; r++) {
//     const row: number[] = [];
//     for (let c = 0; c < 9; c++) {
//       row.push(Math.random() < density ? ((c + r) % 9) + 1 : ((c + 3) % 9) + 1);
//     }
//     board.push(row);
//   }

//   return board;
// }
