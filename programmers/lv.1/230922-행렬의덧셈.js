// https://school.programmers.co.kr/learn/courses/30/lessons/12950
// 230926 - lodash, zip함수로 리팩토링
import _ from "lodash";

function solution(arr1, arr2) {
  let sum = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let e = 0; e < arr1[i].length; e++) {
      sum.push(arr1[i][e] + arr2[i][e]);
    }
  }
  return _.zip(sum);
}

// prettier-ignore
// console.log(solution([[1, 2],[2, 3]], [[3, 4],[5, 6]]));
// console.log(solution([[1, 2]], [[3, 4]]));
