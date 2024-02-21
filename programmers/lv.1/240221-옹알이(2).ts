//https://school.programmers.co.kr/learn/courses/30/lessons/133499
export {};

function solution(babbling: string[]): number {
  let answer: number = 0;
  for (const x of babbling) {
    //연속된 발음이 있는지
    if (/(aya|ye|woo|ma)\1+/g.test(x)) {
      continue;
    }
    //발음할 수 있는 단어만 있는지
    if (/^(aya|ye|woo|ma)+$/g.test(x)) {
      answer++;
    }
  }
  return answer;
}

console.log(solution(["aya", "yee", "u", "maa"])); //1
console.log(solution(["ayaye", "uuu", "yeye", "yemawoo", "ayaayaa"])); //2
console.log(solution(["yeayaye"])); //1
console.log(solution(["mawooma"])); //1
