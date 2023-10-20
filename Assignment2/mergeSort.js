function merge(leftArr, rightArr) {
  const arr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      arr.push(leftArr.shift());
    } else {
      arr.push(rightArr.shift());
    }
  }
  return [...arr, ...leftArr, ...rightArr];
}

function mergeSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  const mid = arr.length / 2;
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));
  return merge(left, right);
}

console.log(mergeSort([2, 33, 21, 5, 0, 11, 124, 25]));
console.log(mergeSort([42, 3, 21, 55, 50, 11, 14, 25]));
