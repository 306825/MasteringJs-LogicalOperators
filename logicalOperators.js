const defaultNumReps = 2;

function repeat(str, numReps) {
  // If `numReps` is null, undefined, or 0, this sets
  // `numReps` to the default value `2`
  numReps = numReps || defaultNumReps;

  let ret = '';
  for (let i = 0; i < numReps; ++i) {
    ret += str;
  }
  return ret;
}

repeat('test', 10);