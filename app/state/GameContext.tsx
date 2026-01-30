
import React, { createContext, useContext, useState } from "react";
import { seedBoard } from "../engine/seeding";
import { addRowLogic } from "../engine/addRow";
import { findMatches } from "../engine/matcher";

export type CellValue = number | null;

type GameContextType = {
  board: CellValue[][];
  selected: { r: number; c: number } | null;
  addRow: () => void;
  selectCell: (r: number, c: number) => void;
};

const GameContext = createContext<GameContextType | null>(null);

export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const level = 1;
  const maxAddRows = 6;

  const [board, setBoard] = useState<CellValue[][]>(() => seedBoard(level));
  const [selected, setSelected] = useState<{ r: number; c: number } | null>(null);
  const [addCount, setAddCount] = useState(0);
  const [noMatchCount, setNoMatchCount] = useState(0);

  const selectCell = (r: number, c: number) => {
    if (board[r][c] === null) return;

    if (!selected) {
      setSelected({ r, c });
      return;
    }

    if (selected.r === r && selected.c === c) {
      setSelected(null);
      return;
    }

    const matches = findMatches(board, selected, { r, c });
    if (matches) {
      const newBoard = board.map(row => [...row]);
      matches.forEach(p => (newBoard[p.r][p.c] = null));
      setBoard(newBoard);
      setNoMatchCount(0);
    } else {
      setNoMatchCount(c => c + 1);
    }

    setSelected(null);
  };

  const addRow = () => {
    if (addCount >= maxAddRows) return;

    const rescue = level === 1 && noMatchCount >= 2;
    setBoard(prev => addRowLogic(prev, level, rescue));
    setAddCount(c => c + 1);
    setNoMatchCount(0);
  };

  return (
    <GameContext.Provider value={{ board, selected, selectCell, addRow }}>
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error("useGame must be used inside GameProvider");
  return ctx;
};




// import React, { createContext, useContext, useState } from "react";
// import { seedBoard } from "../engine/seeding";
// import { addRowLogic } from "../engine/addRow";
// import { findMatches } from "../engine/matcher";

// export type CellValue = number | null;

// type GameContextType = {
//   board: CellValue[][];
//   selectCell: (r: number, c: number) => void;
//   addRow: () => void;
// };

// const GameContext = createContext<GameContextType | null>(null);

// export const GameProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const [board, setBoard] = useState<CellValue[][]>(() => seedBoard(1));
//   const [selected, setSelected] = useState<{ r: number; c: number } | null>(null);

// const selectCell = (r: number, c: number) => {
//   if (board[r][c] === null) return;

//   // 1️⃣ First selection
//   if (!selected) {
//     setSelected({ r, c });
//     return;
//   }

//   // 2️⃣ SAME CELL clicked again → just unselect
//   if (selected.r === r && selected.c === c) {
//     setSelected(null);
//     return;
//   }

//   // 3️⃣ Two different cells → check match
//   const matches = findMatches(board, selected, { r, c });
//   if (matches) {
//     const newBoard = board.map(row => [...row]);
//     matches.forEach(pos => {
//       newBoard[pos.r][pos.c] = null;
//     });
//     setBoard(newBoard);
//   }

//   // 4️⃣ Clear selection after attempt
//   setSelected(null);
// };


//   const addRow = () => {
//     setBoard(prev => addRowLogic(prev, 1));
//   };

//   return (
//     <GameContext.Provider value={{ board, selectCell, addRow }}>
//       {children}
//     </GameContext.Provider>
//   );
// };

// export const useGame = () => {
//   const ctx = useContext(GameContext);
//   if (!ctx) throw new Error("useGame must be used inside GameProvider");
//   return ctx;
// };
