/**
 * Quicksort is in-place divide and conquer sorting algorithm that can sort
 * items of any type for which a "less-than" relation is defined. In efficient
 * implementations it is not a stable sort, meaning that the relative order of
 * equal sort items is not preserved. This algorithm first divides a large
 * array into two smaller sub-arrays: the low elements and the high elements,
 * then recursively sort the sub-arrays.
 * 
 * Quick sort has worst-case complexity O(n^2) and average complexity O(n log n)
 * 
 * @param {array} array
 * @param {*} s
 * @param {*} e
 */
function quickSort(array, s, e) {
  let start = s;
  let end = e;
  let pivot = array[Math.floor((start + end) / 2)];

  while (start <= end) {
    while (array[start] < pivot) {
      // checks whether element before pivot on its place or should be moved
      // to another side, if element on the right side increases start index
      start += 1;
    }
    while (array[end] > pivot) {
      // checks whether element after pivot on its place or should be moved
      // to another side, if element on the right side decrises end index
      end -= 1;
    }
    if (start <= end) {
      // if we are here this means that we've found elements that need to be
      // swapped, after swapping we need to update start and end positions to be
      // able to search further
      [array[start], array[end]] = [array[end], array[start]];
      start += 1;
      end -= 1;
    }
  }

  if (s < end) {
    quickSort(array, s, end);
  }
  if (e > start) {
    quickSort(array, start, e);
  }
}

module.exports = { quickSort };
