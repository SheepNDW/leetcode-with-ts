// minimumOneBitOperations(1xxxxx) = helper(xxxxx)+1+minimumOneBitOperations(10000)
// helper(xxxxx) = minimumOneBitOperations(xxxx), if the highest bit is 0
//                 helper(xxxx)+1+minimumOneBitOperations(1000), if the highest bit is 1
function minimumOneBitOperations(n: number): number {
  const str = n.toString(2);
  const memo = new Map<string, number>();
  const helperMemo = new Map<string, number>();
  return dfs(str, memo, helperMemo);
}

function dfs(n: string, memo: Map<string, number>, helperMemo: Map<string, number>) {
  if (n === '0') return 0;
  if (n === '1') return 1;
  if (memo.has(n)) return memo.get(n)!;

  if (n[0] === '0') return dfs(n.slice(1), memo, helperMemo);

  const m = n.slice(1);
  const p = '1' + '0'.repeat(m.length - 1);

  memo.set(n, helper(m, memo, helperMemo) + 1 + dfs(p, memo, helperMemo));
  return memo.get(n)!;
}

function helper(n: string, memo: Map<string, number>, helperMemo: Map<string, number>) {
  if (n === '0') return 1;
  if (n === '1') return 0;

  if (helperMemo.has(n)) return helperMemo.get(n)!;

  if (n[0] === '1') {
    helperMemo.set(n, dfs(n.slice(1), memo, helperMemo));
  } else {
    const m = n.slice(1);
    const p = '1' + '0'.repeat(m.length - 1);

    helperMemo.set(n, helper(m, memo, helperMemo) + 1 + dfs(p, memo, helperMemo));
  }

  return helperMemo.get(n)!;
}

export { minimumOneBitOperations };
