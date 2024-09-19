//https://school.programmers.co.kr/learn/courses/30/lessons/131127
export {};

function solution(
  want: string[],
  number: number[],
  discount: string[]
): number {
  let answer: number = 0;
  let memberDisList: string[] = [];

  for (const i of discount.keys()) {
    memberDisList = discount.slice(i, i + 10);
    if (memberDisList.length < 10) return answer;

    let count: number = 0;
    for (const j of want.keys()) {
      if (memberDisList.filter((x) => x === want[j]).length !== number[j]) {
        break;
      }
      count++;

      if (count === want.length) {
        answer++;
      }
    }
  }
  return answer;
}

//prettier-ignore
console.log(solution(["banana", "apple", "rice", "pork", "pot"], [3, 2, 2, 2, 1], ["chicken", "apple", "apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana"])); //3
//prettier-ignore
console.log(solution(["apple"], [10], ["banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana", "banana"])) //0
//prettier-ignore
console.log(solution(["banana", "apple", "rice", "pork", "pot"], [3, 2, 2, 2, 1],["apple", "banana", "rice", "apple", "pork", "banana", "pork", "rice", "pot", "banana", "apple", "banana", "chicken", "apple"])) //3
