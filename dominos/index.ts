// https://www.codewars.com/kata/5c356d3977bd7254d7191403

type Domino = [number, number];

type DominoSequence = Domino[];

const flipDomino = (domino: Domino): Domino => {
  return [domino[1], domino[0]];
};

const flipDominoSequence = (dominoSequence: DominoSequence): DominoSequence => {
  const flippedSequence = [];
  for (const domino of dominoSequence) {
    flippedSequence.unshift(flipDomino(domino));
  }
  return flippedSequence;
};

const getAllDominos = (n: number): Domino[] => {
  const dominoSet: Domino[] = [];
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      dominoSet.push([i, j]);
    }
  }
  return dominoSet;
};

const testDominoSequencePair = (
  sequence1: DominoSequence,
  sequence2: DominoSequence
) => {
  const sequence1Ends = [sequence1[0][0], sequence1[sequence1.length - 1][1]];
  const sequence2Ends = [sequence2[0][0], sequence2[sequence2.length - 1][1]];

  let result: DominoSequence | undefined;

  sequence1Ends.forEach((sequence1EndsVal, i) => {
    if (sequence2Ends[0] === sequence1EndsVal) {
      if (i === 0) {
        result = [...flipDominoSequence(sequence2), ...sequence1];
      } else {
        result = [...sequence1, ...sequence2];
      }
    }
    if (sequence2Ends[1] === sequence1EndsVal) {
      if (i === 0) {
        result = [
          ...flipDominoSequence(sequence1),
          ...flipDominoSequence(sequence2),
        ];
      } else {
        result = [...sequence1, ...flipDominoSequence(sequence2)];
      }
    }
  });
  return result;
};

const cycleSequence = (sequence: DominoSequence) => {
  const sequenceCopy = [...sequence];
  const lastDomino = sequenceCopy.pop();
  if (lastDomino) {
    sequenceCopy.unshift(lastDomino);
    return sequenceCopy;
  }
  throw new Error("Invalid sequence provided");
};

function doDominos(n: number) {
  const allDominos = getAllDominos(n);

  const [result, ...pile] = allDominos;

  let dominosState = {
    pile,
    result: [result],
  };

  let i = 0;

  while (dominosState.pile.length) {
    if (i === dominosState.pile.length) {
      const stateCopy = {
        ...dominosState,
        result: cycleSequence(dominosState.result),
      };
      dominosState = stateCopy;
      i = 0;
      continue;
    }
    const matchedPair = testDominoSequencePair(dominosState.result, [
      dominosState.pile[i],
    ]);
    if (!!matchedPair) {
      const pileCopy = [...dominosState.pile];
      pileCopy.splice(i, 1);
      const mutatedState = {
        pile: pileCopy,
        result: matchedPair,
      };
      dominosState = mutatedState;
      i = 0;
    } else {
      i += 1;
    }
  }
}

doDominos(20);
