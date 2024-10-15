## 962. Maximum Width Ramp

維護一個遞減的 stack，但是在生成這個 stack 的時候，我們先不針對每個 `nums[i]` 找最寬的 ramp，而是直接把這個 stack 生成完畢。

```ts
for (let i = 0; i < n; i++) {
  if (stack.length == 0 || nums[stack[stack.length - 1]] > nums[i]) {
    stack.push(i);
  }
}
```

絕妙的下一步是：我們從後往前依次檢查 `nums[j]` 是否大於等於 `nums[stack[stack.length - 1]]`，如果是的話，我們就可以計算這個 ramp 的寬度，然後彈出 stack 的最後一個元素。最後掃完一遍就可以得到最大的 ramp 寬度。

