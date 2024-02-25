//https://school.programmers.co.kr/learn/courses/30/lessons/17681
import _ from "lodash";
export {};

function solution(n: number, arr1: number[], arr2: number[]) {
  const decimalToBinaries: string[] = _.zip(arr1, arr2).map((x) => {
    const firstMap: number = x[0] ?? 0;
    const secondMap: number = x[1] ?? 0;
    return (firstMap | secondMap).toString(2);
  });

  const zeroFilledForBinary: string[] = decimalToBinaries.map((x) =>
    x.padStart(n, "0")
  );

  const decoding: string[] = zeroFilledForBinary.map((x) =>
    x.replace(/1/g, "#").replace(/0/g, " ")
  );

  return decoding;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
//["#####","# # #", "### #", "# ##", "#####"]
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10])); //["######", "### #", "## ##", " #### ", " #####", "### # "]
