function linear_search(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return true;
    }
  }
  return false;
}

console.log(linear_search([2, 3, 5, 7, 1, 2, 57, 23, 4, 5], 57));
console.log(linear_search([2, 3, 5, 7, 1, 2, 57, 23, 4, 5], 44));
