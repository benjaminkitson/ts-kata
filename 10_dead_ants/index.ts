export function deadAntCount(ants: string | null): number {
  if (ants === null) {
    return 0;
  }

  const antCount: Record<string, number> = {
    a: 0,
    n: 0,
    t: 0,
  };

  const deadAnts = ants.split("ant").join("");

  for (let i = 0; i < deadAnts.length; i++) {
    console.log(deadAnts[i]);
    if (antCount[deadAnts[i]] !== undefined) {
      antCount[deadAnts[i]] += 1;
    }
  }

  let maxAnts = 0;

  Object.keys(antCount).forEach((part) => {
    if (antCount[part] > maxAnts) {
      maxAnts = antCount[part];
    }
  });

  return maxAnts;
}
