## 1717. Maximum Score From Removing Substrings

這題其實就是一個簡單的 greedy。如果 ab 收益大，那就從頭開始遍歷盡量刪除 ab。一遍掃完之後，剩下來的就一定是 bbbaaa 的形式，接下來再掃第二遍刪 ba 就好了。
