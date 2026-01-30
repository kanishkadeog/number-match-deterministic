
import { Pressable, Text, StyleSheet, Animated } from "react-native";
import { useRef } from "react";
import { useGame } from "../state/GameContext";

export default function Cell({ value, row, col }: any) {
  const { selectCell, selected } = useGame();
  const scale = useRef(new Animated.Value(1)).current;

  const isSelected = selected?.r === row && selected?.c === col;

  const onPress = () => {
    Animated.sequence([
      Animated.spring(scale, { toValue: 0.9, useNativeDriver: true }),
      Animated.spring(scale, { toValue: 1, useNativeDriver: true }),
    ]).start();
    selectCell(row, col);
  };

  return (
    <Pressable onPress={onPress}>
      <Animated.View
        style={[
          styles.cell,
          { transform: [{ scale }] },
          isSelected && styles.selected,
        ]}
      >
        <Text style={styles.text}>{value ?? ""}</Text>
      </Animated.View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  cell: {
    width: 38,
    height: 38,
    margin: 2,
    borderRadius: 6,
    backgroundColor: "#1e1e1e",
    justifyContent: "center",
    alignItems: "center",
  },
  selected: {
    borderWidth: 2,
    borderColor: "#00e0ff",
    backgroundColor: "#003844",
  },
  text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});




// import { Pressable, Text, StyleSheet } from "react-native";
// import { useGame } from "../state/GameContext";

// export default function Cell({
//   value,
//   row,
//   col,
// }: {
//   value: number | null;
//   row: number;
//   col: number;
// }) {
//   const { selectCell } = useGame();

//   return (
//     <Pressable
//       onPress={() => selectCell(row, col)}
//       style={styles.cell}
//     >
//       <Text style={styles.text}>{value ?? ""}</Text>
//     </Pressable>
//   );
// }

// const styles = StyleSheet.create({
//   cell: {
//     width: 36,
//     height: 36,
//     borderWidth: 1,
//     borderColor: "#555",
//     justifyContent: "center",
//     alignItems: "center",
//   },
//   text: {
//     color: "#fff",
//     fontSize: 16,
//   },
// });
