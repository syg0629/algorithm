// 버블 정렬은 큰 값을 맨 오른쪽으로
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 1; j < array.length; j++) {
      if (array[j - 1] > array[j]) {
        const temp = array[j];
        array[j] = array[j - 1];
        array[j - 1] = temp;
      }
    }
  }
  return array;
}

console.log(bubbleSort([1, 4, 2, 3, 5]));
