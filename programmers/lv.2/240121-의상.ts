//https://school.programmers.co.kr/learn/courses/30/lessons/42578
export {};

function solution(clothes: string[][]): number {
  const conyClothes: Map<string, number> = new Map();
  let answer: number = 1;

  //같은 타입 옷 개수 세기
  //같은 이름을 가진 의상 존재하지 X
  for (const [, type] of clothes) {
    conyClothes.set(type, (conyClothes.get(type) ?? 0) + 1);
  }

  //옷 타입별로 선택하는 경우의 수(안 입었을 경우 +1)
  for (const x of conyClothes.values()) {
    answer = answer * (x + 1);
  }
  //아무것도 입지 않는 경우 제외
  return answer - 1;
}

// prettier-ignore
console.log(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"]])) //5
// prettier-ignore
console.log(solution([["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]])) //3
// prettier-ignore
console.log(solution([["yellow_hat", "headgear"], ["blue_sunglasses", "eyewear"], ["green_turban", "headgear"],["crow_mask", "face"], ["blue_sunglasses", "face"], ["smoky_makeup", "face"]])) //23
