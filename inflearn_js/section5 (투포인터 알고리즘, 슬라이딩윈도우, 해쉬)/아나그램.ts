/**
 * Anagram이란 두 문자열의 알파벳 나열 순서는 다르지만 그 구성이 일치하면 그 두 단어는 아나그램이라고 함
 * 아나그램 판별 시 대소문자가 구분됨
 * 길이가 같은 두 개의 단어가 주어지면 두 단어가 아나그램인지 판별하는 프로그램
 */
export {};

function solution(str1: string, str2: string): string {
  const m: Map<string, number> = new Map();
  for (const x of str1) {
    if (m.has(x)) {
      const currentCnt = m.get(x);
      if (currentCnt !== undefined) {
        m.set(x, currentCnt + 1);
      }
    } else {
      m.set(x, 1);
    }
  }
  for (const x of str2) {
    if (m.has(x)) {
      const currentCnt = m.get(x);
      if (currentCnt !== undefined) {
        m.set(x, currentCnt - 1);
      }
    } else {
      m.set(x, 1);
    }
  }
  for (const [key, value] of m) {
    if (value !== 0) {
      return "NO";
    }
  }
  return "YES";
}

console.log(solution("AbaAeCe", "baeeACA")); //YES
console.log(solution("abaCC", "Caaab")); //NO
