## 1871. Jump Game VII

如果 `i` 位置上字符是 0，並且可以到達，那麼就可以知道在 `[i + minJump] ~ [i + maxJump]` 這段區間我們也可以到達。怎麼樣去標記呢？把每個區間都逐一遍歷標記是個效率非常低的做法，我們要馬上聯想到常用的工具：差分陣列。

具體來說，如果區間 `[a,b]` 可以到達，我們就把這個區間裡的每個元素的 reach 屬性加 1，處理完所有區間後，那些 reach 屬性大於 0 的，一定就是可到達的位置；反之 reach 是 0 代表無論如何都到不了。給一個區間 `[a,b]` 裡每個元素整體增加 1，就是典型的 range addition，正解是利用差分陣列 diff，更新 `diff[a]+=1, diff[b+1]-=1`。

綜上，具體解法為：

遍歷 `i` 位置時，`i` 是否能到達取決於 `reach += diff[i]`，如果 `reach == 0` 或是 `s[i] == '1'` 就可以忽略該點。否則我們需要立足該點 `i` 並標記以它為起始點所移動的區間 `[i+minJump, i+maxJump]` 為“可到達”，即 `diff[i + minJump] += 1, diff[i + maxJump + 1] -= 1`。

最後檢查最後一個位置上是否是 `'0'`，且 `reach > 0`。