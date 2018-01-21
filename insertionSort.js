/**
 * Insertion sort is an in-place sorting algorithm. It iterates, consuming
 * one input element each repetition, and growing a sorted output list. At
 * each iteration, insertion sort removes one element from the input data,
 * finds the location it belongs within the sorted list, and inserts it there.
 * It repeats until no input elements remain.
 *
 * Insertion sort has worst-case and average complexity both О(n^2)
 *
 * @param {array} array
 * @returns {array} - sorted array
 */
function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let value = array[i];
    let inner = i;

    while (inner > 0 && array[inner-1] > value) {
      array[inner] = array[inner-1];
      inner -= 1;
    }

    array[inner] = value;
  }
}

module.exports = { insertionSort };
