//https://school.programmers.co.kr/learn/courses/30/lessons/120840
export {};

function solution(balls: number, share: number): number {
  let ballsF: number = 1;
  for (let i = balls; i >= balls - share + 1; i--) {
    ballsF *= i;
  }

  let shareF: number = 1;
  for (let i = share; i >= 1; i--) {
    shareF *= i;
  }
  return Math.floor(ballsF / shareF);
}

console.log(solution(3, 2)); //3
console.log(solution(5, 3)); //10
