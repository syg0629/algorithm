//https://school.programmers.co.kr/learn/courses/30/lessons/17681
export {};

function solution(n: number, arr1: number[], arr2: number[]): string[] {
  const decimalToBinaries: string[] = arr1.map((x, i) =>
    (x | arr2[i]).toString(2)
  );
  const fillZeros: string[] = decimalToBinaries.map((x) => x.padStart(n, "0"));
  const decoding: string[] = fillZeros.map((x) =>
    x.replace(/1/g, "#").replace(/0/g, " ")
  );
  return decoding;
}

console.log(solution(5, [9, 20, 28, 18, 11], [30, 1, 21, 17, 28]));
//["#####","# # #", "### #", "# ##", "#####"]
console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10])); //["######", "### #", "## ##", " #### ", " #####", "### # "]
