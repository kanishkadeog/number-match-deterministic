
export function findMatches(
  board: (number | null)[][],
  a: { r: number; c: number },
  b: { r: number; c: number }
) {
  if (a.r === b.r && a.c === b.c) return null;

  const v1 = board[a.r][a.c];
  const v2 = board[b.r][b.c];
  if (v1 === null || v2 === null) return null;

  const dr = Math.abs(a.r - b.r);
  const dc = Math.abs(a.c - b.c);

  // wrap-around horizontal
  const wrapRow =
    a.r === b.r &&
    Math.abs(a.c - b.c) === board[0].length - 1;

  const adjacent =
    (dr <= 1 && dc <= 1) || wrapRow;

  if (!adjacent) return null;

  if (v1 === v2 || v1 + v2 === 10) {
    return [a, b];
  }

  return null;
}




// export function findMatches(
//   board: (number | null)[][],
//   a: { r: number; c: number },
//   b: { r: number; c: number }
// ) {
//   const v1 = board[a.r][a.c];
//   const v2 = board[b.r][b.c];
//   if (v1 === null || v2 === null) return null;

//   if (v1 === v2 || v1 + v2 === 10) {
//     return [a, b];
//   }

//   if (a.r === b.r && a.c === b.c) return null;
  
//   return null;
// }
