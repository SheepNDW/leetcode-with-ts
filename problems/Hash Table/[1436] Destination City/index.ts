// hash set
function destCity(paths: string[][]): string {
  const startSet = new Set(paths.map((path) => path[0]));

  for (const path of paths) {
    if (!startSet.has(path[1])) {
      return path[1];
    }
  }

  return '';
}

// simulate 直接走，遇到沒有下一座城市的就是終點
function destCity1(paths: string[][]): string {
  const roadMap = paths.reduce((map, path) => {
    map[path[0]] = path[1];
    return map;
  }, {} as Record<string, string>);

  let currCity = paths[0][0];
  while (roadMap[currCity]) {
    currCity = roadMap[currCity];
  }

  return currCity;
}

export { destCity };
