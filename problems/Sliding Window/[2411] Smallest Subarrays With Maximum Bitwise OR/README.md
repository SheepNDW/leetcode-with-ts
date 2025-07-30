## 2411. Smallest Subarrays With Maximum Bitwise OR

```
X X X [X X X X] X X n-1
       i     j
```
對於 i 而言，如果將這個區間的右邊界 j 設定為 n-1，那麼必然能夠得到 Maximum Bitwise OR，記做 `OrSum`。我們該如何縮減這個區間但是又不影響 `OrSum` 呢？最基本的想法是，嘗試去掉 `nums[j]`，如果去掉之後仍然能夠得到 `OrSum`，那麼就可以縮減區間。那麼如何去驗證呢？如果暴力地將 `nums[i:j]` 這個區間內的所有元素再做一次 OR 操作，複雜度會相當高。

不妨這樣去思考：如果去掉 `nums[j]` 之後仍然能夠得到 `OrSum`，說明對於 `nums[j]` 裡某個是 1 的位元而言，在 `nums[i:j-1]` 裡必然還有至少一個元素在該位元上是 1 的。這就給了我們一個方向，需要統計一下 `nums[i:j]` 裡在每個位元上的 1 的總個數。

舉例來說：如果對於某個 bit，區間 `[i:j]` 裡有三個 1，且 `nums[j]` 本身就是 1，那麼去掉 `nums[j]` 之後，OR 在 `[i:j-1]` 這個 bit 上仍不受影響，因為還有兩個 1 在這個 bit 上。反之，如果某個 bit 在 `[i:j]` 裡只有一個 1，且 `nums[j]` 本身就是 1，那麼去掉 `nums[j]` 之後，OR 在 `[i:j-1]` 這個 bit 上就會變成 0，因此不能去掉 `nums[j]`。

所以如果我們已知一個區間 `[i:j]` 能夠得到 `i` 的 maximum Bitwise OR，就可以用一個計數器 count (記錄 32 個 bit 上的 1 的個數) 來幫助我們判斷是否可以縮減這個區間。

```typescript
for (let k = 0; k < 32; k++) {
  if (count[k] === 1 && (nums[j] >> k) & 1) {
    return false; // 不能去掉 nums[j]
  }
}
return true; // 可以去掉 nums[j]
```

透過這樣的方式，我們就可以一路縮小 `j`，直到得出 `i` 的最小 subarray 長度。

接著我們想知道 `i - 1` 的情況，此時不需要將 `j` 放回到 `n-1`，因為我們已知 `[j+1:n-1]` 的各個位置上的 1bit 都完全與 `[i:j]` 區間重複了，因此可以直接從 `j` 開始繼續縮小。
