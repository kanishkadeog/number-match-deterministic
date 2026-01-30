
import { View, StyleSheet } from "react-native";
import { useGame } from "../state/GameContext";
import Cell from "./Cell";

export default function GameBoard() {
  const { board } = useGame();

  return (
    <View style={styles.board}>
      {board.map((row, r) => (
        <View key={r} style={styles.row}>
          {row.map((v, c) => (
            <Cell key={c} value={v} row={r} col={c} />
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  board: {
    padding: 12,
    borderRadius: 12,
    backgroundColor: "#111",
  },
  row: {
    flexDirection: "row",
  },
});



// import { View, StyleSheet } from "react-native";
// import { useGame } from "../state/GameContext";
// import Cell from "./Cell";

// export default function GameBoard() {
//   const { board } = useGame();

//   return (
//     <View style={styles.board}>
//       {board.map((row, r) => (
//         <View key={r} style={styles.row}>
//           {row.map((v, c) => (
//             <Cell key={c} value={v} row={r} col={c} />
//           ))}
//         </View>
//       ))}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   board: {
//     padding: 10,
//     backgroundColor: "#222",
//   },
//   row: {
//     flexDirection: "row",
//   },
// });
