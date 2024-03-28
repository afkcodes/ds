function binary_search(haystack, needle) {
  let low = 0;
  let high = haystack.length;

  do {
    const m = Math.floor(low + (high - low) / 2);
    const v = haystack[m];

    if (v === needle) {
      return true;
    } else if (v > needle) {
      high = m;
    } else {
      low = m + 1;
    }
  } while (low < high);
  {
    return false;
  }
}

console.log(binary_search([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 8));
console.log(binary_search([2, 3, 5, 7, 11, 21, 157, 230], 44));
