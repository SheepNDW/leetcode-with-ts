/*
  (a+b)%k = 0
  a%k = r => b%k = k-r
*/
function canArrange(arr: number[], k: number): boolean {
  const remain = Array.from({ length: k }, () => 0);

  for (const num of arr) {
    const r = ((num % k) + k) % k; // 確保餘數是正的
    remain[r] += 1;
  }

  // 餘數為 0 的數必須是偶數
  if (remain[0] % 2 !== 0) return false;

  // 如果 k 是偶數 餘數為 k/2 的數也必須是偶數
  if (k % 2 === 0 && remain[k / 2] % 2 !== 0) return false;

  // 檢查其餘餘數是否可以互補配對
  for (let i = 1; i < k / 2; i++) {
    if (remain[i] !== remain[k - i]) return false;
  }

  return true;
}

export { canArrange };
