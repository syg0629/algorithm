//https://school.programmers.co.kr/learn/courses/30/lessons/17684
export {};

function solution(msg: string): number[] {
  const answer: number[] = [];
  const dictionary: Map<string, number> = new Map();

  //사전 초기화
  const aAsciiCode = "A".charCodeAt(0);
  const zAsciiCode = "Z".charCodeAt(0);
  for (let i = aAsciiCode; i < zAsciiCode; i++) {
    dictionary.set(String.fromCharCode(i), i - aAsciiCode - 1);
  }

  let index: number = dictionary.size + 1;
  let curChar: string = "";

  for (const x of msg) {
    const combined: string = curChar + x;

    // 사전에 새로운 문자열이 있는지 확인
    if (dictionary.get(combined)) {
      curChar = combined;
    } else {
      // 사전에 없는 경우 기존 문자열을 answer에 넣음. 사전에 새로운 문자열 추가
      answer.push(dictionary.get(curChar)!);
      dictionary.set(combined, index++);
      curChar = x;
    }
  }

  // 남은 문자열도 answer에 넣음
  answer.push(dictionary.get(curChar)!);
  return answer;
}

console.log(solution("KAKAO")); //[11, 1, 27, 15]
console.log(solution("TOBEORNOTTOBEORTOBEORNOT")); //[20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34]
console.log(solution("ABABABABABABABAB")); //[1, 2, 27, 29, 28, 31, 30]
