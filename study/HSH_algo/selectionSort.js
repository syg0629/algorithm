// 선택 정렬은 작은 요소를 맨 왼쪽으로
function selectionSort(array) {
  let indexMin, temp;

  for (let i = 0; i < array.length - 1; i++) {
    // 변경의 대상이 되는 기준 원소의 인덱스, 제일 작은 요소
    indexMin = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[indexMin]) {
        indexMin = j;
      }
    }
    temp = array[indexMin];
    array[indexMin] = array[i];
    array[i] = temp;
  }
  return array;
}

console.log(selectionSort([1, 4, 2, 3, 5]));
