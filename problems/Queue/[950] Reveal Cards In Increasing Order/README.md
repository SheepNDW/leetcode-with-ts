## 950. Reveal Cards In Increasing Order

可以使用一個 `Queue` 來輔助我們進行操作，`Queue` 裡記錄 `index`，並且按照規則進行輸出：

* step 1
```
deck sorted
[2 3 5 7 11 13 17]
 ^
index queue
[0 1 2 3 4 5 6]
 ^
result
[2 0 0 0 0 0 0]
 ^
```

* step 2
```
deck sorted
[2 3 5 7 11 13 17]

index queue
[_ 2 3 4 5 6 1] --> 要跳過一個，所以要把 1 差到隊尾

result
[2 0 0 0 0 0 0]
```

* step 3
```
deck sorted
[2 3 5 7 11 13 17]
   ^
index queue
[2 3 4 5 6 1]
 ^
result
[2 0 3 0 0 0 0]
     ^
```

...依此類推


```
deck sorted
[2 3 5 7 11 13 17]
         ^
index queue
[3 5 1]
 ^
result
[2 11 3 0 5 0 7]
   ^
```

直到將 `Queue` 清空就完成了。
