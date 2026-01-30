import { GameProvider } from "./app/state/GameContext";
import GameScreen from "./app";

export default function App() {
  return (
    <GameProvider>
      <GameScreen />
    </GameProvider>
  );
}
