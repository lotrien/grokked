/**
 * Bubble sort is a simple sorting algorithm that repeatedly steps through
 * the list to be sorted, compares each pair of adjacent items and swaps
 * them if they are in the wrong order. The pass through the list is repeated
 * until no swaps are needed, which indicates that the list is sorted.
 *
 * Bubble sort has worst-case and average complexity both О(n^2)
 *
 * @param {array} array
 * @returns {array} - sorted array
 */
function bubbleSort(array) {
  // Set to true on the beginning to run the loop below.
  let swapped = true;

  while (swapped) {
    // Reset swapped on each iteration, so we can detect iterations
    // without a swap and finish algorithm.
    swapped = false;

    for (let i = 1; i < array.length; i++) {
      if (array[i] < array[i-1]) {
        [array[i-1], array[i]] = [array[i], array[i-1]];
        swapped = true;
      }
    }
  }

  return array;
}

module.exports = { bubbleSort };
