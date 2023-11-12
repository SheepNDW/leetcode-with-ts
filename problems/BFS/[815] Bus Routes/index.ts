function numBusesToDestination(routes: number[][], source: number, target: number): number {
  const stopToRoutes = new Map<number, number[]>();

  routes.forEach((route, i) => {
    route.forEach((stop) => {
      if (!stopToRoutes.has(stop)) {
        stopToRoutes.set(stop, []);
      }
      stopToRoutes.get(stop)!.push(i);
    });
  });

  const visitedStops = new Set<number>(); // 已訪問的站點
  const visitedRoutes = new Set<number>(); // 已乘坐的路線
  const queue = [[source, 0]]; // [當前站點, 乘坐的公車數]

  while (queue.length > 0) {
    const [currentStop, busCount] = queue.shift()!;

    if (currentStop === target) {
      return busCount;
    }

    const routesFromStop = stopToRoutes.get(currentStop) || [];
    for (const routeIndex of routesFromStop) {
      if (visitedRoutes.has(routeIndex)) continue;
      visitedRoutes.add(routeIndex);

      for (const stop of routes[routeIndex]) {
        if (!visitedStops.has(stop)) {
          visitedStops.add(stop);
          queue.push([stop, busCount + 1]);
        }
      }
    }
  }

  return -1;
}

export { numBusesToDestination };
