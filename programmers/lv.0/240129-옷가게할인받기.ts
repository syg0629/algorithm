//https://school.programmers.co.kr/learn/courses/30/lessons/120818
export {};

function solution(price: number): number {
  if (price >= 500000) {
    return Math.floor(price * 0.8);
  } else if (price >= 300000) {
    return Math.floor(price * 0.9);
  } else if (price >= 100000) {
    return Math.floor(price * 0.95);
  }
  return price;
}

console.log(solution(150000)); //142,500
console.log(solution(580000)); //464,000
