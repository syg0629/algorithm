//https://school.programmers.co.kr/learn/courses/30/lessons/17681
import _ from "lodash";
export {};

function solution(n: number, map1: number[], map2: number[]) {
  const decimalToBinaries: string[] = _.zip(map1, map2).map(([row1, row2]) => {
    return (row1! | row2!).toString(2);
  });

  const paddedBinary: string[] = decimalToBinaries.map((x) =>
    x.padStart(n, "0")
  );

  return paddedBinary.map((x) => x.replace(/1/g, "#").replace(/0/g, " "));
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
//["#####","# # #", "### #", "# ##", "#####"]
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10])); //["######", "### #", "## ##", " #### ", " #####", "### # "]
