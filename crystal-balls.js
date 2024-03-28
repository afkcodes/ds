function two_crystal_balls(breaks) {
  const jumpAmt = Math.floor(Math.sqrt(breaks.length));
  let i = jumpAmt;
  for (; i < breaks.length; i += jumpAmt) {
    if (breaks[i]) {
      break;
    }
  }
  i -= jumpAmt;

  for (let j = 0; jumpAmt && i < breaks.length; ++j, ++i) {
    if (breaks[i]) {
      return i;
    }
  }
  return -1;
}

console.log(two_crystal_balls([false, false, false, false, true, true, true, true]));
