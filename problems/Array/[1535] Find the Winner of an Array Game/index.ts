function getWinner(arr: number[], k: number): number {
  let winCount = 0;
  let currWinner = arr[0];

  for (let i = 1; i < arr.length && winCount < k; i++) {
    if (currWinner > arr[i]) {
      // 如果當前贏家贏了，增加贏的計數
      winCount++;
    } else {
      // 如果對手贏了，對手成為新的贏家，贏的計數重置為1
      currWinner = arr[i];
      winCount = 1;
    }

    // 如果已經連續贏了k次，直接結束遊戲
    if (winCount === k) {
      return currWinner;
    }
  }

  // 如果所有對手都已經比完，那麼目前的贏家就是最終贏家
  // 這種情況下無需擔心連續勝利k次，因為贏家已經擊敗了所有對手
  return currWinner;
}

export { getWinner };
