## 1749. Maximum Absolute Sum of Any Subarray

解法 1：Kadane's Algorithm

最大的 subarray sum 的絕對值，必定是由最大的正數 subarray sum 或最小的負數 subarray sum 之間取得，所以我們只要解出這兩個 subarray sum 取絕對值較大的即可。

求 max subarray sum 是一個經典的問題，可以使用 Kadane's Algorithm 來解。我們可以令 `dp[i]` 為以 `nums[i]` 結尾的最大 subarray sum，可以推導出 `dp[i] = max(nums[i], dp[i-1] + nums[i])`。

解法 2：Prefix Sum

任何一個 `abs(sum[i:j])` 都可以被表示為兩個前綴和之差，即 `abs(presum[j] - presum[i-1])` 的形式。那麼最佳解 `[i:j]` 就是對應全域最大的 `presum[j]` 和全域最小的 `presum[i-1]`。注意：0 也是前綴和。

