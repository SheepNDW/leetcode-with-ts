## 752. Open the Lock

這個問題涉及到一個有四個旋轉輪的鎖，每個輪上有從 `'0'` 到 `'9'` 的數字。我們的目標是將鎖從初始狀態 `"0000"` 轉到給定的 `target` 狀態，但要避開列在 `deadends` 中的“死結”。

使用廣度優先搜索（BFS）。這種方法能夠層層推進，直到找到目標狀態，同時確保步數最少。

```
      0000
    / /|\ \
 1000 ... 0009
   |       |
2000 ... 1009
   |       |
  ...     ...
   |       |
9010 ... 0001 → DEADEND
```

整體的過程如下：

1. 初始化：將起始狀態 `"0000"` 加進 queue，queue 中的元素包含目前鎖的狀態和到達此狀態的步數。
2. 探索鄰居：對 queue 中每個狀態生成所有可能的下一步狀態（每個輪可以增加 1 或減少 1）。
3. 跳過死結和重複：確保每次產生的新狀態沒有在 `deadends` 和 `visited` 出現過。
4. 目標檢查：如果生成的新狀態是目標狀態，則停止搜索並返回步數。
5. 重複直到找到解：如果沒有找到解且隊列耗盡，則返回 -1。

產生所有下一步的方法如下：

```ts
function scroll(state: string): string[] {
  const result: string[] = [];

  for (let i = 0; i < 4; i++) {
    for (const d of [-1, 1]) {
      let num = +state[i];
      num = (num + d + 10) % 10; // % 10 確保 9 被翻回 0

      const temp = state.slice(0, i) + `${num}` + state.slice(i + 1);

      result.push(temp);
    }
  }

  return result;
}
```
