function isReachableAtTime(sx: number, sy: number, fx: number, fy: number, t: number): boolean {
  const width = Math.abs(fx - sx);
  const height = Math.abs(fy - sy);

  if (width === 0 && height === 0 && t === 1) {
    return false;
  }

  return t >= Math.max(width, height);
}

export { isReachableAtTime };
