//https://school.programmers.co.kr/learn/courses/30/lessons/42577
export {};

function nonDuplicatedPrefix(phoneBook: string[]): boolean {
  const phoneNum: Record<string, boolean> = {};

  for (const x of phoneBook) {
    phoneNum[x] = true;
    for (let i = 1; i < x.length; i++) {
      const cutPhoneNum: string = x.slice(0, i);
      if (phoneNum[cutPhoneNum]) {
        return false;
      }
    }
  }
  return true;
}

function solution(phone_book: string[]): boolean {
  if (nonDuplicatedPrefix(phone_book)) {
    return nonDuplicatedPrefix(phone_book.reverse());
  } else {
    return false;
  }
}

console.log(solution(["119", "97674223", "1195524421"])); //false
console.log(solution(["123", "456", "789"])); //true
console.log(solution(["12", "883", "8835", "567", "88"])); //false
console.log(solution(["119", "1192456"])); //false
console.log(solution(["1192456", "119"])); //false
