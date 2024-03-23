//https://school.programmers.co.kr/learn/courses/30/lessons/17682
export {};

function solution(dartResult: string): number {
  const scores: number[] = [];
  let num: string = "";

  for (const x of dartResult) {
    if (/\d/.test(x)) {
      num += x;
    } else {
      if (num) {
        scores.push(Number(num));
        num = "";
      }

      const poppedScore = scores.pop()!;
      if (x === "*") {
        const prevScore = scores.pop() ?? 0;
        scores.push(prevScore * 2, poppedScore * 2);
      } else if (x === "#") {
        scores.push(poppedScore * -1);
      } else {
        scores.push(calculateScore(poppedScore, x)!);
      }
    }
  }
  return scores.reduce((x: number, y: number) => x + y, 0);
}

function calculateScore(score: number, bonus: string): number {
  const bonusScoreTable: Record<string, number> = { S: 1, D: 2, T: 3 };
  return Math.pow(score, bonusScoreTable[bonus]);
}

console.log(solution("1S2D*3T")); //37
console.log(solution("1D2S#10S")); //9
console.log(solution("1D2S0T")); //3
console.log(solution("1S*2T*3S")); //23
console.log(solution("1D#2S*3S")); //5
console.log(solution("1T2D3D#")); //-4
console.log(solution("1D2S3T*")); //59
console.log(solution("1S2D3T*")); //63
