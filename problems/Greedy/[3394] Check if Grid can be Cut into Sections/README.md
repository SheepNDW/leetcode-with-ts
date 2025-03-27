## 3394. Check if Grid can be Cut into Sections

本題本質上就是在橫向和縱向上分別檢查是否存在至少三個 non-overlapping intervals。

數 non-overlapping intervals 的經典演算法就是將所有區間按照首端點排序。然後將第一個區間的尾端點作為目前的最大尾端點，然後依次檢查後續每個區間的首端點是否小於目前的最大尾端點，如果是，則表示這兩個區間有重疊。如果不是，則表示這兩個區間沒有重疊，則更新目前的最大尾端點為目前區間的尾端點。
