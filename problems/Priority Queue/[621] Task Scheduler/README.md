## 621. Task Scheduler

* 透過 Priority Queue 模擬最佳的過程

讓 n 自加 1，這樣就可以算每 n 個相鄰位置不能有重複元素（例如：AAAB, n = 3，則需要四個一組才能避免重複）

設計一個 max heap 或 max pq，以元素出現頻率(freq)當作其元素。然後每次從裡面拿出 freq 最高的前 n 個字元，將 freq 減一後放回去 pq。

即使 pq 內元素已少於 n 個，但只要還沒完成所有任務我們都要讓計數器 `+=n` 因為題目說可以用 `idle` 來填充，直到最後一輪因為已經都執行完了，才讓計數器 `+=num`，`num` 是最後一輪彈出的元素個數。

```ts
let ans = 0;

while (!pq.isEmpty()) {
  const k = Math.min(n, pq.size());
  const temp: number[] = [];

  for (let i = 0; i < k; i++) {
    let front = pq.dequeue().element;
    front--;
    if (front !== 0) temp.push(front);
  }
  if (temp.length > 0) {
    ans += n;
  } else {
    ans += k;
  }

  temp.forEach((d) => pq.enqueue(d));
}

return ans;
```

* Greedy

由於題目不關心具體過程，所以可以不用像前一個解法一樣全部模擬出來。

首先找出頻率最高的任務A，假設它頻率為 `maxFreq`，那就將全部的元素分成 `maxFreq` 組，每組第一個就是 A。同時給每一組預留 `n` 個位置。這樣就可以完美地處理完所有的 A，如果有其他頻率也是 `maxFreq`，也做類似處理。

總共有 `maxFreq` 列，每列靠前的位置都填充頻率為 `maxFreq` 的元素，除了最後一列外每列有 `n` 格：

```
A B X X X X X
A B X X X X X
A B X X X X X
A B X X X X X
A B 
```

接著從上到下左至右的順序，依次在特定位置上填充第二高頻、第三高頻的任務...因為其他的頻率都不會超過 `maxFreq - 1`，而我們有 `maxFreq - 1` 列，說明同一列裡不會出現兩個相同的。最終填充結果只有兩種可能：一種是上面的格子沒有被填滿；第二種是格子已經被填滿，但還有沒有填完的任務。

第一種情況如下，將前 `maxFreq-1` 列裡沒有被填充的格子都標記為 `idle`，把這些列都拼起來就是一個符合要求的方案。這個方案裡不管 tasks 具體的數量，總格子是固定的，即 `(maxFreq-1) * n + 零頭`，零頭為頻率為 `maxFreq` 的任務總數。

```
A B C D E H _
A B C D F _ _
A B C D F _ _
A B C E G _ _
A B 
```

對於第二種情況，所有的 `idle` 位置都已經填滿了，但還有尚未填充的任務。此時可以打破每列只能填 `n` 個的限制，從上到下左至右的順序繼續填充在前 `maxFreq-1` 列就好。這種方案的總格子數就是 tasks 的大小。

```
A B C D E H L p t
A B C D F I M q u
A B C D F J N r
A B C E G K O s
A B 
```

這兩種方案不可能共存，只要 tasks 的數量大於規劃的格子數 `(maxFreq - 1) * n + 零頭`，那答案就會是 `tasks.length`，反之則是第一種方案。
