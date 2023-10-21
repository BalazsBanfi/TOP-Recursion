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
  return merge(mergeSort(arr.slice(0, mid)), mergeSort(arr.slice(mid)));
}

console.log('original ', [2, 33, 21, 5, 0, 11, 124, 25]);
console.log('sorted ', mergeSort([2, 33, 21, 5, 0, 11, 124, 25]));
console.log('original ', [42, 3, 21, 55, 50, 11, 14, 25]);
console.log('sorted ', mergeSort([42, 3, 21, 55, 50, 11, 14, 25]));
console.log('original ', [42, 3, 21, 55, 50, 11, 14, 25, 1232, 5565432, 22, 12123, 331, 12, 22, -44, -54]);
console.log('sorted ', mergeSort([42, 3, 21, 55, 50, 11, 14, 25, 1232, 5565432, 22, 12123, 331, 12, 22, -44, -54]));