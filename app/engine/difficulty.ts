
export function difficultyForLevel(level: number) {
  if (level === 6 || level === 11) return 0.65; // relief
  if (level <= 2) return 0.75;
  if (level <= 5) return 0.55;
  if (level <= 10) return 0.45;
  return 0.6;
}



// export function difficultyForLevel(level: number) {
//   if (level === 6 || level === 11) return 0.4;
//   if (level <= 2) return 0.7;
//   if (level <= 5) return 0.55;
//   if (level <= 10) return 0.45;
//   return 0.5;
// }
