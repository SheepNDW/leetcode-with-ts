/*
  ex: 5 -> 101, 7 -> 111

  left != right
   1 0 1 >> 1 0 X 
   1 1 1 >> 1 1 X
   count = 1
  left != right
   1 0 X >> 1 X X
   1 1 X >> 1 X X
   count = 2
  
  left << count
  1 << 2 = 100 -> 4
*/
function rangeBitwiseAnd(left: number, right: number): number {
  let shift = 0;
  // 找到公共前綴
  while (left < right) {
    left >>= 1;
    right >>= 1;
    shift++;
  }
  return left << shift;
}

export { rangeBitwiseAnd };
