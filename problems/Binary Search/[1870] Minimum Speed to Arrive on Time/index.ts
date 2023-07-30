function minSpeedOnTime(dist: number[], hour: number): number {
  let minSpeed = 1;
  let maxSpeed = 1e7;
  let result = -1;

  const calculateTime = (dist: number[], speed: number) => {
    let time = 0;
    for (let i = 0; i < dist.length; i++) {
      const t = dist[i] / speed;
      time += i === dist.length - 1 ? t : Math.ceil(t);
    }
    return time;
  };

  while (minSpeed <= maxSpeed) {
    const midSpeed = ~~((maxSpeed + minSpeed) / 2);
    let totalTime = calculateTime(dist, midSpeed);

    if (totalTime <= hour) {
      result = midSpeed;
      maxSpeed = midSpeed - 1;
    } else {
      minSpeed = midSpeed + 1;
    }
  }

  return result;
}

/**
 * 思路：Binary Search
 * 1. 初始化最小速度 1，最大速度 1e7，result = -1
 * 2. 當 minSpeed <= maxSpeed 每次取中間速度 midSpeed
 * 3. 計算 midSpeed 需要的時間 (除了最後一段路程，其餘路程都需要向上取整)
 * 4. 如果時間小於等於 hour，則更新 result，並將 maxSpeed 更新為 midSpeed - 1
 * 5. 如果時間大於 hour，則將 minSpeed 更新為 midSpeed + 1
 * 6. 回傳 result
 */

export { minSpeedOnTime };
