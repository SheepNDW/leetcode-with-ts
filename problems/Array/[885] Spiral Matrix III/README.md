## 885. Spiral Matrix III

這題的關鍵在於是否能看出移動步數的規律：

我們移動方向是由右、下、左、上這四個方向依序循環

* 首先向右移動 1 步
* 然後向下移動 1 步
* 然後向左移動 2 步
* 然後向上移動 2 步
* 然後向右移動 3 步
* 然後向下移動 3 步
* ... 依此類推

可以發現到每完成兩個方向的移動，移動步數就會加 1。

解題思路：

先初始化一個 res 來存放結果，然後放入起始位置 `[rStart, cStart]`，然後準備一個代表四個方向得陣列 `directions` 和一個初始化方向指標 `d`（指向 directions 的第一個方向），接著我們用一個變數 `steps` 來表示目前移動的步數

具體操作如下：

```ts
while (res.length < rows * cols) {
  for (let i = 0; i < 2; i++) { // 每個 steps 會走兩次
    for (let j = 0; j < steps; j++) {
      // 根據目前的方向移動
      rStart += directions[d][0];
      cStart += directions[d][1];
      
      if (如果在範圍內) {
        res.push([rStart, cStart]);
      }
    }

    d = (d + 1) % 4; // 更新方向
  }

  steps++; // 每次完成兩個方向的移動，步數加 1
}
```
