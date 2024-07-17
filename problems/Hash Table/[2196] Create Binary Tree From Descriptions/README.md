## 2196. Create Binary Tree From Descriptions

準備一個 hash map 來存放每個節點值映射到的節點，當我們迭代每個 `[parent, child, isLeft]` 時，我們需要去檢查父節點和子節點是否已經存在，如果不存在，我們就建立一個新節點，並將其加入到 hash map 中。

然後如果是左節點，我們將子節點加入到父節點的左子樹中，否則加入到右子樹中。

最後為了找到根節點，我們可以事先準備一個 hash set 來記錄所有出現過的子節點，最後只要在掃過一次 descriptions，找到沒有出現在 hash set 中的節點，就是根節點。
