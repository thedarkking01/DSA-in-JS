function findLargest(arr) {

  // must be an array
  if (!Array.isArray(arr)) {
    return false;
  }

  // empty array
  if (arr.length === 0) {
    return null;
  }

  // validate elements
  for (let i = 0; i < arr.length; i++) {

    if (!Number.isFinite(arr[i])) {
      return false;
    }

  }

  let largest = arr[0];

  for (let i = 1; i < arr.length; i++) {

    if (arr[i] > largest) {
      largest = arr[i];
    }

  }

  return largest;
}

module.exports = { findLargest };