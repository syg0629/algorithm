//https://school.programmers.co.kr/learn/courses/30/lessons/120818
export {};

function solution(price: number): number {
  return price >= 500000
    ? Math.floor(price * 0.8)
    : price >= 300000
    ? Math.floor(price * 0.9)
    : price >= 100000
    ? Math.floor(price * 0.95)
    : price;
}

console.log(solution(150000)); //142,500
console.log(solution(580000)); //464,000
