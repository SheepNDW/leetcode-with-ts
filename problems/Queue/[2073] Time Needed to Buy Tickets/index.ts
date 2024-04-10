/*
  simulation
*/
function timeRequiredToBuy0(tickets: number[], k: number): number {
  const n = tickets.length;
  let times = 0;

  while (tickets[k] > 0) {
    for (let i = 0; i < n; i++) {
      if (tickets[i] > 0) {
        tickets[i]--;
        times++;
      }
      if (tickets[k] === 0) {
        return times;
      }
    }
  }

  return times;
}

/*
  one pass
*/
function timeRequiredToBuy(tickets: number[], k: number): number {
  const n = tickets.length;
  let times = 0;

  for (let i = 0; i < n; i++) {
    if (i <= k) {
      times += Math.min(tickets[k], tickets[i]);
    } else {
      times += Math.min(tickets[k] - 1, tickets[i]);
    }
  }

  return times;
}

export { timeRequiredToBuy };
