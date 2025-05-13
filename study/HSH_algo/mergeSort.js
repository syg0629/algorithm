// Merge Sort
// 시간복잡도 : O(n log n)
// 공간복잡도 : O(n)
function mergeSort(arr) {
  if (arr.length <= 1) {
    // 더이상 나누지 않는 수준의 단계
    return arr;
  }
  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid); // 중간 인덱스 찾기
  const right = arr.slice(mid); // 중간 원소보다 작은 값이 모인 배열
  const sortedLeft = mergeSort(left); // 중간 원소보다 큰 값이 모인 배열
  const sortedRight = mergeSort(right);
  return merge(sortedLeft, sortedRight);
}

function merge(left, right) {
  const merged = [];
  let leftIndex = 0;
  let rightIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      merged.push(left[leftIndex]);
      leftIndex++;
    } else {
      merged.push(right[rightIndex]);
      rightIndex++;
    }
  }
  while (leftIndex < left.length) {
    merged.push(left[leftIndex]);
    leftIndex++;
  }
  while (rightIndex < right.length) {
    merged.push(right[rightIndex]);
    rightIndex++;
  }
  return merged;
}

console.log(mergeSort([1, 4, 2, 3, 5]));
console.log(mergeSort([1, 4, 2, 3, 5, 6, 7, 8, 9]));
