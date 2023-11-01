// https://www.codewars.com/kata/6329d94bf18e5d0e56bfca77

export function lru(n: number, referencesList: number[]): number[] {
  const memory: number[] = [];
  const recentlyUsed: number[] = [];
  const memoryLocations: Record<number, number> = {};

  for (const ref of referencesList) {
    if (memory.length < n && memoryLocations[ref] === undefined) {
      memory.push(ref);
      recentlyUsed.push(ref);
      memoryLocations[ref] = memory.length - 1;
    } else if (memoryLocations[ref] === undefined) {
      memory[memoryLocations[recentlyUsed[0]]] = ref;
      memoryLocations[ref] = memoryLocations[recentlyUsed[0]];
      delete memoryLocations[recentlyUsed[0]];
      recentlyUsed.shift();
      recentlyUsed.push(ref);
    }

    if (memoryLocations[ref] !== undefined) {
      recentlyUsed.splice(
        recentlyUsed.findIndex((n) => n === ref),
        1
      );
      recentlyUsed.push(ref);
    }
  }

  while (memory.length < n) {
    memory.push(-1);
  }

  return memory;
}
