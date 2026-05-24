function findSmallest(arr) {
  // your solution here
  if (!Array.isArray(arr)) { return false }
  if (arr.length == 0) { return null }
  for (let i = 0; i < arr.length; i++){
    if (!Number.isFinite(arr[i])) {
      return false
    }
  }
  let smallest = arr[0]
  for (let i = 0; i < arr.length; i++){
    if (arr[i] < smallest) {
      smallest=arr[i]
      
    }
  }
  return smallest
}

module.exports = { findSmallest };