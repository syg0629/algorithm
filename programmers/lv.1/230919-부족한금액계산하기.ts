//https://school.programmers.co.kr/learn/courses/30/lessons/82612
export {};

function solution(price: number, money: number, count: number): number {
  let amt: number = 0;
  for (let i: number = 0; i <= count; i++) {
    amt += price * i;
  }
  return money > amt ? 0 : amt - money;
}

console.log(solution(3, 20, 4)); //10
