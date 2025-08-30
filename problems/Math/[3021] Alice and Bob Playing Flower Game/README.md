## 3021. Alice and Bob Playing Flower Game

從問題描述中，我們可以看見，當 `x+y` 是奇數時，Alice 才能贏得遊戲。而我們有兩種情況：

1. `x` 是奇數，`y` 是偶數。此時 `(x,y)` 配對的組合數是 $\lceil \tfrac{n}{2} \rceil \times \lfloor \tfrac{m}{2} \rfloor$。
2. `x` 是偶數，`y` 是奇數。此時 `(x,y)` 配對的組合數是 $\lfloor \tfrac{n}{2} \rfloor \times \lceil \tfrac{m}{2} \rceil$。

因此，全部能讓 Alice 贏的組合數 `(x,y)` 是：

$$\lceil \tfrac{n}{2} \rceil \times \lfloor \tfrac{m}{2} \rfloor + \lfloor \tfrac{n}{2} \rfloor \times \lceil \tfrac{m}{2} \rceil$$

我們再將這個方程式化簡：

* 如果 `n` 和 `m` 都是偶數，我們可以寫成：

  $$\tfrac{n}{2} \times \tfrac{m}{2} + \tfrac{n}{2} \times \tfrac{m}{2} = \tfrac{nm}{2}$$

* 如果 `n` 和 `m` 都是奇數，我們可以寫成：

  $$\tfrac{n+1}{2} \times \tfrac{m-1}{2} + \tfrac{n-1}{2} \times \tfrac{m+1}{2} = \tfrac{nm-n+m-1}{4} + \tfrac{nm+n-m-1}{4}$$

  $$=\tfrac{2nm-2}{4} = \tfrac{nm-1}{2}$$

* 如果其中一個是奇數，這裡假設 `n` 是奇數，`m` 是偶數，我們可以寫成：

  $$\tfrac{n+1}{2} \times \tfrac{m}{2} + \tfrac{n-1}{2} \times \tfrac{m}{2} = \tfrac{nm+m}{4} + \tfrac{nm-m}{4} = \tfrac{2nm}{4} = \tfrac{nm}{2}$$

把三種情況合併起來，我們可以得到一個通用的方程式：$\lfloor \tfrac{nm}{2} \rfloor$

所以最後答案就會是 `Math.floor(n * m / 2)`
