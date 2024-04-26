// 헬퍼 메소드 재귀는 재귀적이지 않은 외부 함수가 재귀적인 내부 함수를 호출하는 패턴
function collectOdds(nums: number[]): number[] {
  const result: number[] = [];
  // 함수가 호출될 때마다 빈 배열로 리셋되기에 헬퍼 메소드 재귀를 둠
  function helper(helperInput: number[]) {
    if (helperInput.length === 0) return;
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    helper(helperInput.slice(1));
  }
  helper(nums);
  return result;
}

console.log(collectOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]));
