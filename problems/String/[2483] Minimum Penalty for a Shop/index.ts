// Prefix Sum
function bestClosingTime0(customers: string): number {
  const n = customers.length;
  const prefixCountY: number[] = new Array(n).fill(0);
  const prefixCountN: number[] = new Array(n).fill(0);

  prefixCountY[0] = customers[0] === 'Y' ? 1 : 0;
  prefixCountN[0] = customers[0] === 'N' ? 1 : 0;

  for (let i = 1; i < n; i++) {
    prefixCountY[i] = prefixCountY[i - 1] + (customers[i] === 'Y' ? 1 : 0);
    prefixCountN[i] = prefixCountN[i - 1] + (customers[i] === 'N' ? 1 : 0);
  }

  let minPenalty = prefixCountN[n - 1]; // 關門時間為 n
  let bestTime = n;

  for (let j = 0; j <= n; j++) {
    // 計算關門時間為 j 的 penalty
    let currPenalty = 0;
    if (j > 0) {
      currPenalty += prefixCountN[j - 1];
    }
    if (j < n) {
      currPenalty += prefixCountY[n - 1] - (j > 0 ? prefixCountY[j - 1] : 0);
    }

    if (currPenalty < minPenalty) {
      minPenalty = currPenalty;
      bestTime = j;
    } else if (currPenalty === minPenalty) {
      bestTime = Math.min(bestTime, j);
    }
  }

  return bestTime;
}

// ==== Alternatives ====

function bestClosingTime1(customers: string): number {
  const n = customers.length;
  let currPenalty = 0;
  for (let i = 0; i < n; i++) {
    if (customers[i] === 'Y') {
      currPenalty++;
    }
  }

  let minPenalty = currPenalty;
  let bestTime = 0;

  for (let j = 0; j < n; j++) {
    const char = customers[j];

    if (char === 'Y') {
      currPenalty--;
    } else {
      currPenalty++;
    }

    if (currPenalty < minPenalty) {
      bestTime = j + 1;
      minPenalty = currPenalty;
    }
  }

  return bestTime;
}

function bestClosingTime(customers: string): number {
  let minPenalty = 0;
  let currPenalty = 0;
  let bestTime = 0;

  for (let i = 0; i < customers.length; i++) {
    const char = customers[i];

    if (char === 'Y') {
      currPenalty--;
    } else {
      currPenalty++;
    }

    if (currPenalty < minPenalty) {
      bestTime = i + 1;
      minPenalty = currPenalty;
    }
  }

  return bestTime;
}

export { bestClosingTime };
