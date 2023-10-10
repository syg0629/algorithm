//https://school.programmers.co.kr/learn/courses/30/lessons/12944

function avgCalculator(arr: number[]): number {
  return arr.reduce((x: number, y: number) => x + y, 0) / arr.length;
}

console.log(avgCalculator([1, 2, 3, 4])); //2.5
console.log(avgCalculator([5, 5])); //5
