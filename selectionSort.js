/**
 * Selection sort is an in-place sorting algorithm. This algorithm divides
 * the input list into two parts: the sublist of items already sorted and
 * the sublist of items remaining to be sorted. Initially, the sorted sublist
 * is empty and the unsorted sublist is the entire input list.
 * The algorithm proceeds by finding the smallest (or largest, depending
 * on sorting order) element in the unsorted sublist, exchanging (swapping) it
 * with the leftmost unsorted element (putting it in sorted order), and moving
 * the sublist boundaries one element to the right.
 *
 * Selection sort has worst-case and average complexity both О(n^2)
 *
 * @param {array} array
 * @returns {array} - sorted array
 */
function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let smallest = i;

    for (let j = i+1; j < array.length; j++) {
      if (array[smallest] > array[j]) {
        smallest = j;
      }
    }

    [array[smallest], array[i]] = [array[i], array[smallest]];
  }
  return array;
}

module.exports = { selectionSort };
