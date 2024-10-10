//https://www.acmicpc.net/problem/5635
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input1.txt";
const [_, ...studentList] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split("\n");
const studentsInfo = studentList.map((x: string) => {
  const [name, dd, mm, yyyy] = x.split(" ");
  const dateInfo = new Date(Number(yyyy), Number(mm) - 1, Number(dd));
  return { name, dateInfo };
});

studentsInfo.sort(
  (a: { dateInfo: number }, b: { dateInfo: number }) => a.dateInfo - b.dateInfo
);

console.log(studentsInfo[studentsInfo.length - 1].name);
console.log(studentsInfo[0].name);
