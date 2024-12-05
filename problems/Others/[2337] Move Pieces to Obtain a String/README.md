## 2337. Move Pieces to Obtain a String

此題和 `777. Swap Adjacent in LR String` 幾乎一樣。

因為 LR 都不會彼此跨越，所以很容易得到一個必要條件，那就是所有空格去除後，start 和 target 字串必須完全一樣，再來就是因為 target 裡的 L 都必須是從 start 裡對應的 L 向左移動來的，所以另外一個必要條件就是檢查它們的初始位置：start 的 L 必須比 target 對應的 L 更靠右，同理 R 就必須更靠左。
