// 순수 재귀
// 필요한 모든 코드가 함수 자체에 포함되며 재귀적인 코드
function collectOddValues(arr: number[]): number[] {
  let newArr: number[] = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

console.log(collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]));

/**
 * Pure Recursion Tips
 *
 * 배열을 사용하고 헬퍼 메소드 없이 순수 재귀 솔루션을 작성하는 경우,
 * 배열을 복사하는 slice, spread연산자(operator), concat 같은 메소드를 사용할 수 있음
 * 일종의 결과를 출적할 수 있음
 *
 * 문자열은 변경할 수 없음
 * slice나 substring을 사용해서 사본을 만들어야함
 *
 * 객체의 경우, Object.assign이나 spread 연산자를 사용하는게 유용
 */
