## 1865. Finding Pairs With a Certain Sum

每次查詢 `count(tot)` 時，不能暴力 `O(n*m)` 遍歷所有組合，否則會超時。可以用雜湊表 (Map) 紀錄 nums2 元素的出現次數，接下來在計算 `nums1[i] + nums2[j] == tot` 時，求法就如同 two sum 一樣，對於每個 `nums1[i]`，計算 `tot - nums1[i]`，然後在 Map 中查找這個值的出現次數即可。
