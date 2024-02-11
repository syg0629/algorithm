//https://school.programmers.co.kr/learn/courses/30/lessons/120840
export {};

function solution(balls: number, share: number): number {
  let ballsF: number = 1;
  for (let i = balls; i >= balls - share + 1; i--) {
    ballsF *= i;
  }

  for (let i = 1; i <= share; i++) {
    ballsF /= i;
  }

  return Math.round(ballsF);
}
console.log(solution(3, 2)); //3
console.log(solution(5, 3)); //10
console.log(solution(30, 25)); //142506 Math.round안 붙이면 142506.00000000006
