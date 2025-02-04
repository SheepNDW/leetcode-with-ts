## 1267. Count Servers that Communicate

我們只要在預處理中統計每行每列的元素各有多少個。對於那些同行/同列裡都只有一個元素的 server，就肯定不會與其他元素 connected；反之就是會與其他元素 connected。
