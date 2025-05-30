function insertSort(array) {
  for (let i = 1; i < array.length; i++) {
    const currentValue = array[i];
    let j; // undefined
    for (let j = i - 1; j >= 0 && array[j] > currentValue; j--) {
      array[j + 1] = array[j];
    }
    array[j + 1] = currentValue;
  }
  return array;
}

console.log(insertSort())