//https://school.programmers.co.kr/learn/courses/30/lessons/120883
export {};

function solution(id_pw: [string, string], db: [string, string][]): string {
  const map: Map<string, string> = new Map();
  db.forEach((x: [string, string]) => {
    const [key, value] = x;
    map.set(key, value);
  });

  return map.get(id_pw[0])
    ? map.get(id_pw[0]) === id_pw[1]
      ? "login"
      : "wrong pw"
    : "fail";
}

//prettier-ignore
console.log(solution(["meosseugi", "1234"],	[["rardss", "123"], ["yyoom", "1234"], ["meosseugi", "1234"]])); //"login"
//prettier-ignore
console.log(solution(["programmer01", "15789"],	[["programmer02", "111111"], ["programmer00", "134"], ["programmer01", "1145"]])); //"wrong pw"
//prettier-ignore
console.log(solution(["rabbit04", "98761"],	[["jaja11", "98761"], ["krong0313", "29440"], ["rabbit00", "111333"]])); //"fail"
