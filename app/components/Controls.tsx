import { Button, View } from "react-native";
import { useGame } from "../state/GameContext";

export default function Controls() {
  const { addRow } = useGame();

  return (
    <View style={{ marginTop: 12 }}>
      <Button title="Add Row +" onPress={addRow} />
    </View>
  );
}
