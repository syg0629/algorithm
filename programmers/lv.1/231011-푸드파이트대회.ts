//https://school.programmers.co.kr/learn/courses/30/lessons/134240

export {};
import _ from "lodash";

// function solution(food: number[]): string {
//   let leftFood: string = "";

//   for (let i: number = 1; i < food.length; i++) {
//     leftFood += String(i).repeat(Math.floor(food[i] / 2));
//   }
//   const rightFood: string = leftFood.split("").reverse().join("");
//   return leftFood + 0 + rightFood;
// }

// function solution(food: number[]): string {
//   const leftFood: number[] = [];

//   for (let i = 1; i < food.length; i++) {
//     leftFood.push(Number(String(i).repeat(Math.floor(food[i] / 2))));
//   }
//   return leftFood.join("") + 0 + leftFood.reverse().join("");
// }

// function solution(food: number[]): string {
//   const leftFood: number[] = [];

//   for (let i = 1; i < food.length; i++) {
//     const checkedFood = Math.floor(food[i] / 2);
//     leftFood.push(...Array(checkedFood).fill(i));
//   }
//   return leftFood.join("") + 0 + leftFood.reverse().join("");
// }

// function solution(food: number[]): string {
//   const placedFood: number[] = [];

//   for (const [i] of food.entries()) {
//     const checkedFood = Math.floor(food[i] / 2);
//     placedFood.push(...Array(checkedFood).fill(i));
//   }
//   return placedFood.join("") + 0 + placedFood.reverse().join("");
// }

// function solution(food: number[]): string {
//   const placedFood: number[] = [];

//   for (const [index, value] of food.entries()) {
//     const checkedFood = Math.floor(value / 2);
//     placedFood.push(..._.times(checkedFood, () => index));
//   }
//   return placedFood.join("") + "0" + placedFood.reverse().join("");
// }

function solution(food: number[]): string {
  const placedFood: number[] = [];

  for (const [index, value] of food.entries()) {
    const checkedFood = Math.floor(value / 2);
    placedFood.push(..._.times(checkedFood, _.constant(index)));
  }
  return placedFood.join("") + "0" + placedFood.reverse().join("");
}

console.log(solution([1, 3, 4, 6])); //"1223330333221"
console.log(solution([1, 7, 1, 2])); //"111303111"
