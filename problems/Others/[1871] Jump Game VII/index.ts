/*
    X X i X X [X X X X] X
  d           +1 0 0 0 -1
*/
function canReach(s: string, minJump: number, maxJump: number): boolean {
  if (s[s.length - 1] === '1') return false;

  const n = s.length;
  const diff: number[] = new Array(n + 1).fill(0);
  diff[0 + minJump] = 1;
  diff[0 + maxJump + 1] = -1;

  let reach = 0;
  for (let i = 1; i < n; i++) {
    reach += diff[i];
    if (reach === 0) continue;
    if (s[i] === '1') continue;

    if (i + minJump <= n) diff[i + minJump] += 1;
    if (i + maxJump + 1 <= n) diff[i + maxJump + 1] -= 1;
  }

  return reach > 0;
}

export { canReach };
