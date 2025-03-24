## 2115. Find All Possible Recipes from Given Supplies

這題類似於「先修課程」的問題：某些節點（recipe）只有在訪問過所有依賴的節點（ingredient）之後才能被解鎖，因此使用拓撲排序（Topological Sort）是一個適合的解法。

首先我們需要建立兩個對應關係：
1. `ingredientToRecipes`：一個映射表，記錄每種食材可以用來製作哪些食譜（ingredient → recipes）。
2. `indegree`：記錄每個食譜還缺多少個食材。

接著使用一個 BFS 佇列來模擬製作過程：
- 佇列的初始元素為 `supplies` 中的所有食材。
- 每次從佇列中取出一個元素（可以是原始食材或已完成的食譜），檢查它可以解鎖哪些新的食譜。
- 如果某個食譜的入度變成 0，表示它所需的所有食材都已具備，便可以製作，並加入佇列繼續處理。

最後，將所有成功製作的食譜加入結果陣列中回傳。

