//https://school.programmers.co.kr/learn/courses/30/lessons/12928

function sumOfAliquot(n: number): number {
  let answer: number = 0;
  for (let i: number = 0; i <= n; i++) {
    if (n % i === 0) {
      answer += i;
    }
  }
  return answer;
}

console.log(sumOfAliquot(12)); //28
console.log(sumOfAliquot(5)); //6
