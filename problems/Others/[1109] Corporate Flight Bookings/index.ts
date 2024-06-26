/*
  brute force
*/
function corpFlightBookings0(bookings: number[][], n: number): number[] {
  const res = Array.from({ length: n + 1 }, () => 0);

  for (const [f1, f2, seats] of bookings) {
    for (let i = f1; i <= f2; i++) {
      res[i] += seats;
    }
  }

  return res.slice(1);
}

/*
  diff array
*/
function corpFlightBookings(bookings: number[][], n: number): number[] {
  const diff = Array.from({ length: n + 1 }, () => 0);

  for (const [f1, f2, seats] of bookings) {
    diff[f1] += seats;
    diff[f2 + 1] -= seats;
  }

  const res: number[] = [];
  let total = 0;

  for (let i = 1; i <= n; i++) {
    total += diff[i];
    res.push(total);
  }

  return res;
}

export { corpFlightBookings };
