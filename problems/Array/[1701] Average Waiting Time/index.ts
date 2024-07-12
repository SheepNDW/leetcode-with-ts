function averageWaitingTime(customers: number[][]): number {
  const n = customers.length;
  let totalWaiting = 0;
  let curTime = 0;

  for (const [arrive, time] of customers) {
    if (curTime < arrive) {
      curTime = arrive;
    }

    totalWaiting += curTime + time - arrive;
    curTime += time;
  }

  return totalWaiting / n;
}

export { averageWaitingTime };
