function jump(nums: number[]): number {
  let jumps = 0;
  let curEnd = 0; // 當前跳躍的最遠範圍
  let nextEnd = 0; // 下一跳可到達的最遠範圍

  for (let i = 0; i < nums.length - 1; i++) {
    nextEnd = Math.max(nextEnd, i + nums[i]);

    if (i === curEnd) {
      jumps++;
      curEnd = nextEnd;
    }
  }

  return jumps;
}

export { jump };
