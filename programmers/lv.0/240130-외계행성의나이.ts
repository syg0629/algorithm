//
export {};

function solution(age: number) {
  const ageLetters: string[] = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
  ];
  return [...age.toString()].map((x) => ageLetters[Number(x)]).join("");
}

console.log(solution(23)); //"cd"
console.log(solution(51)); //"fb"
console.log(solution(100)); //"baa"
