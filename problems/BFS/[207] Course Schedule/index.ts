/*
  DFS
*/
function canFinish0(numCourses: number, prerequisites: number[][]): boolean {
  // graph[i] contains its all prerequisites
  const graph: number[][] = Array.from({ length: numCourses }, () => []);
  const visited = new Array<number>(numCourses).fill(0);

  for (const [course, pre] of prerequisites) {
    graph[course].push(pre);
  }

  for (let i = 0; i < numCourses; i++) {
    if (dfs(i) === false) return false;
  }

  return true;

  function dfs(cur: number): boolean {
    if (visited[cur] === 1) return true;
    if (visited[cur] === 2) return false;

    visited[cur] = 2;

    for (const next of graph[cur]) {
      if (dfs(next) === false) return false;
    }

    visited[cur] = 1;
    return true;
  }
}

/*
  BFS
*/
function canFinish(numCourses: number, prerequisites: number[][]): boolean {
  const graph = Array.from({ length: numCourses }, () => [] as number[]);
  const indegree = new Array<number>(numCourses).fill(0);

  for (const [course, pre] of prerequisites) {
    graph[course].push(pre);
    indegree[pre]++;
  }

  const q: number[] = [];
  for (let i = 0; i < numCourses; i++) {
    if (indegree[i] === 0) {
      q.push(i);
    }
  }

  let completed = 0;

  while (q.length > 0) {
    const cur = q.shift()!;
    completed++;

    for (const next of graph[cur]) {
      indegree[next]--;

      if (indegree[next] === 0) {
        q.push(next);
      }
    }
  }

  return completed === numCourses;
}

export { canFinish };
