import { View, Text, StyleSheet } from "react-native";
import GameBoard from "./components/GameBoard";
import Controls from "./components/Controls";

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Number Match Puzzle</Text>
      <GameBoard />
      <Controls />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111",
  },
  title: {
    fontSize: 24,
    color: "#fff",
    marginBottom: 12,
  },
});
