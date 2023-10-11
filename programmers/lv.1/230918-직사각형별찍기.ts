//https://school.programmers.co.kr/learn/courses/30/lessons/12969

process.stdin.setEncoding("utf8");
process.stdin.on("data", (data: string) => {
  const n: string[] = data.split(" ");
  const a: number = Number(n[0]),
    b: number = Number(n[1]);
  for (let i: number = 0; i < b; i++) {
    console.log("*".repeat(a));
  }
});
