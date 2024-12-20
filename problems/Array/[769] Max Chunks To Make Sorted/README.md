## 769. Max Chunks To Make Sorted

核心思想就是如果從陣列的開頭到某一位置 i，該範圍內的最大值 max 小於或等於 i，則可以將這部分視為一個獨立的 chunk，因為它不會影響後續的排序順序。
