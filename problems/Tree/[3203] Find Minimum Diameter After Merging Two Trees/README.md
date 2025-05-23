## 3203. Find Minimum Diameter After Merging Two Trees

關於樹的最大路徑（直徑），求法就是 `1245. Tree Diameter` 的做法。

在本題中，我們要求聯通後的直徑最小，那麼聯通的兩個點，必定在各自樹的直徑的中點位置。這可以用反證法推理：假設聯通點是樹的節點A，那麼根據直徑定義，我們需要尋找A到樹裡離它的最遠端點。我們可以至少找到這樣一條路徑：A先到直徑的中點M，再從M走到直徑的一個端點（固定為d/2長度）。這條路徑顯然總長於將A點直接設定於M處的方案。故聯通點設定在M處，可以最小化A離它最短端點。

於是本題的一個解就是 $\lceil \frac{d1}{2} \rceil + \lceil \frac{d2}{2} \rceil + 1$

但是注意，聯通樹的最大直徑不一定要一定同時經過樹1和樹2。比如，如果樹1遠遠大於樹2，那麼 d1 本身就可能是聯通樹的最大直徑。類似的 d2 也是。所以本題是要在三個可能答案中取最大的那個。
