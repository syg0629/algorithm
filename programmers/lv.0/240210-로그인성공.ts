//https://school.programmers.co.kr/learn/courses/30/lessons/120883
export {};

function solution(idPw: [string, string], db: [string, string][]): string {
  const map: Map<string, string> = new Map(db);
  const [id, pw] = idPw;
  const storedPw = map.get(id);

  if (!storedPw) return "fail";
  return storedPw === pw ? "login" : "wrong pw";
}

//prettier-ignore
console.log(solution(["meosseugi", "1234"],	[["rardss", "123"], ["yyoom", "1234"], ["meosseugi", "1234"]])); //"login"
//prettier-ignore
console.log(solution(["programmer01", "15789"],	[["programmer02", "111111"], ["programmer00", "134"], ["programmer01", "1145"]])); //"wrong pw"
//prettier-ignore
console.log(solution(["rabbit04", "98761"],	[["jaja11", "98761"], ["krong0313", "29440"], ["rabbit00", "111333"]])); //"fail"
