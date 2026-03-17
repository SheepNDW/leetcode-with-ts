## 1727. Largest Submatrix With Rearrangements

我們遍歷每一列，考慮如果以 i-th row 為底邊，我們所能建構出的最大矩形的面積為何。此時我們看到的就會是以 i-th row 為底邊的 histogram，這題和 85. Maximal Rectangle 不同的地方在於我們可以調整 histogram 中各條 bar 的順序來拼湊出最大的矩形，為了更高效地去建構矩形，我們可以 greedy 的將高度相近的 bar 放在一起，也就是將 bar 按照高度由大到小排序。這樣一來，隨著矩形的底邊越長，代價就是高度越低，我們橫向遍歷一遍後，就可以找到最大的矩形面積了。
