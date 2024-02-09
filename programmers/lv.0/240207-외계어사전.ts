//https://school.programmers.co.kr/learn/courses/30/lessons/120869
export {};

function solution(spell: string[], dic: string[]) {
  return dic.filter((x) => spell.every((y) => x.includes(y))).length ? 1 : 2;
}

console.log(solution(["p", "o", "s"], ["sod", "eocd", "qixm", "adio", "soo"])); //2
console.log(solution(["z", "d", "x"], ["def", "dww", "dzx", "loveaw"])); //1
console.log(
  solution(["s", "o", "m", "d"], ["moos", "dzx", "smm", "sunmmo", "som"])
); //2
