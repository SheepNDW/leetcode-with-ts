/*
  simulation
*/
function countStudents(students: number[], sandwiches: number[]): number {
  let lastServed = 0;
  let topIndx = 0;

  while (students.length && lastServed < students.length) {
    const curStudent = students.shift()!;
    if (sandwiches[topIndx] === curStudent) {
      topIndx++;
      lastServed = 0;
    } else {
      students.push(curStudent);
      lastServed++;
    }
  }

  return students.length;
}

/*
  counting
*/
function countStudents1(students: number[], sandwiches: number[]): number {
  const map: Record<number, number> = { 0: 0, 1: 0 };
  students.forEach((item) => (map[item] += 1));
  while (sandwiches.length && map[sandwiches[0]] > 0) {
    const cur = sandwiches.shift()!;
    map[cur]--;
  }

  return map[0] + map[1];
}

export { countStudents };
