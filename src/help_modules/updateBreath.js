/* eslint-disable import/no-mutable-exports */
// Breath
const breathInc = 0.1;
let breathDir = 1;
let breathAmt = 0;
const breathMax = 2;

function updateBreath() {
  if (breathDir === 1) { // breath in
    breathAmt -= breathInc;
    if (breathAmt < -breathMax) {
      breathDir = -1;
    }
  } else { // breath out
    breathAmt += breathInc;
    if (breathAmt > breathMax) {
      breathDir = 1;
    }
  }
}

export { breathAmt, updateBreath };
