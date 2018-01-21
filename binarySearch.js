/**
 * Binary search works on sorted arrays. Binary search begins by comparing
 * the middle element of the array with the target value. If the target
 * value matches the middle element, its position in the array is returned.
 * If the target value is less than or greater than the middle element, the
 * search continues in the lower or upper half of the array, respectively,
 * eliminating the other half from consideration.
 *
 * Binary search runs in at worst logarithmic time, making O(log n) comparisons.
 *
 * @param {array} array
 * @param {*} value
 * @param {function} comparator - compares passed values (@returns 0 if values
 * matched, -1 if current value is less than a target value, 1 if current value is
 * greater than target value)
 */
function binarySearch(array, value, comparator) {
  let start = 0;
  let end = array.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end)/ 2);
    let bingo = array[mid];
    const compareResult = comparator(bingo, value);

    if (compareResult === 0) {
      return bingo;
    }

    if (compareResult === 1) {
      end = mid - 1;
    } else if (compareResult === -1) {
      start = mid + 1;
    }
  }

  return null;
}

module.exports = { binarySearch };
