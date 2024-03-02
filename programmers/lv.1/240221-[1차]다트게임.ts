//https://school.programmers.co.kr/learn/courses/30/lessons/17682
export {};

function solution(dartResult: string): number {
  let scores: number[] = [];
  let num: string = "";

  for (const x of dartResult) {
    if (/\d/.test(x)) {
      num += x;
    } else {
      if (num) {
        scores.push(Number(num));
        num = "";
      }

      if (x === "*") {
        const prev = scores.pop()!;
        scores.push((scores.pop()! || 0) * 2);
        scores.push(prev * 2);
      } else if (x === "#") {
        scores.push(scores.pop()! * -1);
      } else {
        scores.push(calculateScore(scores.pop()!, x)!);
      }
    }
  }
  return scores.reduce((x: number, y: number) => x + y, 0);
}

function calculateScore(score: number, bonus: string): number {
  if (bonus === "S") return Math.pow(score, 1);
  if (bonus === "D") return Math.pow(score, 2);
  if (bonus === "T") return Math.pow(score, 3);
  return 0;
}

console.log(solution("1S2D*3T")); //37
console.log(solution("1D2S#10S")); //9
console.log(solution("1D2S0T")); //3
console.log(solution("1S*2T*3S")); //23
console.log(solution("1D#2S*3S")); //5
console.log(solution("1T2D3D#")); //-4
console.log(solution("1D2S3T*")); //59
