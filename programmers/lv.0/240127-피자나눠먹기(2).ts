//
export {};

function solution(n: number): number {
  let pizza: number = 6;
  while (true) {
    if (pizza % n === 0) {
      break;
    }
    pizza += 6;
  }
  return pizza / 6;
}

console.log(solution(6)); //1
console.log(solution(10)); //5
console.log(solution(4)); //2
