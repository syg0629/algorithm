//https://school.programmers.co.kr/learn/courses/30/lessons/134240

export {};

function solution(food: number[]): string {
  let leftFood: string = "";

  for (let i: number = 1; i < food.length; i++) {
    leftFood += String(i).repeat(Math.floor(food[i] / 2));
  }
  const rightFood: string = leftFood.split("").reverse().join("");
  return leftFood + 0 + rightFood;
}

console.log(solution([1, 3, 4, 6])); //"1223330333221"
console.log(solution([1, 7, 1, 2])); //"111303111"
