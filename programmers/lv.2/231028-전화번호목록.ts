//https://school.programmers.co.kr/learn/courses/30/lessons/42577
export {};

function solution(phone_book: string[]): boolean {
  for (const x of phone_book) {
    for (const y of phone_book) {
      if (x !== y && x.startsWith(y)) {
        return false;
      }
    }
  }
  return true;
}

console.log(solution(["119", "97674223", "1195524421"])); //false
console.log(solution(["123", "456", "789"])); //true
console.log(solution(["12", "883", "8835", "567", "88"])); //false
console.log(solution(["119", "1192456"])); //false
console.log(solution(["1192456", "119"])); //false
