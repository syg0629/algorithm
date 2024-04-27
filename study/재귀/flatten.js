//배열의 배열을 받아들이고 모든 값이 평활화(flattened)된 새 배열을 반환하는 flatten이라는 재귀(recursive ) 함수를 작성

function flatten(num) {
  const flattened = [];
  function flattenedHelper(num) {
    for (const x of num) {
      if (Array.isArray(x)) {
        flattenedHelper(x);
      } else {
        flattened.push(x);
      }
    }
  }
  flattenedHelper(num);
  return flattened;
}

console.log(flatten([1, 2, 3, [4, 5]])); // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])); // [1, 2, 3, 4, 5]
console.log(flatten([[1], [2], [3]])); // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); // [1,2,3]
