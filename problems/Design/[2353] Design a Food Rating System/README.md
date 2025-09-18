## 2353. Design a Food Rating System

設計一個美食評分系統：

初始化系統，給定一組食物清單 `foods`、對應的料理類型清單 `cuisines` 以及對應的評分清單 `ratings`。其中 `foods[i]` 是第 `i` 個食物的名稱，`cuisines[i]` 是該食物的料理類型，`ratings[i]` 是該食物的初始評分。

系統支援以下操作：

- `changeRating(food, newRating)`：修改指定食物的評分為 `newRating`。
- `highestRated(cuisine)`：查詢某料理類型中評分最高的食物名稱。如果有多個食物評分相同，則回傳字典序最小的食物名稱。

這是一個典型的需要我們快速更新和快速查詢的問題。我們使用兩個主要的資料結構來實現這個系統：

1. `foodMap: Map<string, FoodInfo>`：
   - 食物名稱 -> { 食物名稱, 所屬菜系, 當前評分 }
2. `cuisineFoodMap: Map<string, PriorityQueue<FoodInfo>>`：
   - 菜系名稱 -> 優先佇列 (根據評分和字典序排序)

這題的核心是 Lazy Deletion 技巧。當我們更新食物評分時，我們不會直接從優先佇列中移除舊的評分，而是將新的評分重新插入佇列。當我們查詢最高評分的食物時，如果發現佇列頂端的食物評分已經不是最新的，我們就將其彈出，直到找到最新的評分。

```ts
const pq = this.cuisineFoodMap.get(cuisine)!;

while (!pq.isEmpty()) {
  const top = pq.front()!;

  if (this.foodMap.get(top.foodName)!.rating === top.rating) {
    return top.foodName;
  }

  pq.pop();
}
```
