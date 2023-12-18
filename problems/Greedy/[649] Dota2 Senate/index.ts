// O(n^2)
function predictPartyVictory1(senate: string): string {
  const senateMembers = senate.split('');

  while (senateMembers.length > 1) {
    const currentMember = senateMembers.shift() as string;

    let isFinish = true;
    for (let i = 0; i < senateMembers.length; i++) {
      if (senateMembers[i] !== currentMember) {
        senateMembers.splice(i, 1);
        isFinish = false;
        break;
      }
    }

    senateMembers.push(currentMember);
    if (isFinish) break;
  }

  return senateMembers[senateMembers.length - 1] === 'R' ? 'Radiant' : 'Dire';
}

// O(n)
function predictPartyVictory(senate: string): string {
  const n = senate.length;
  const rQueue = [];
  const dQueue = [];

  for (let i = 0; i < n; i++) {
    if (senate[i] === 'R') {
      rQueue.push(i);
    } else {
      dQueue.push(i);
    }
  }

  while (rQueue.length && dQueue.length) {
    const rTurn = rQueue.shift() as number;
    const dTurn = dQueue.shift() as number;

    if (dTurn < rTurn) {
      dQueue.push(dTurn + n);
    } else {
      rQueue.push(rTurn + n);
    }
  }

  return rQueue.length === 0 ? 'Dire' : 'Radiant';
}

export { predictPartyVictory };
