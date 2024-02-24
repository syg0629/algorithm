//https://school.programmers.co.kr/learn/courses/30/lessons/120884
export {};

//받을 수 있는 최대 서비스 치킨의 수 return
//서비스 치킨에도 쿠폰이 발급됩니다.
function solution(chicken: number): number {
  let answer: number = 0;
  const n = 10;
  while (true) {
    const freeChicken: number = Math.floor(chicken / n);
    if (freeChicken === 0) break;

    answer += freeChicken;
    //남은 쿠폰 + 서비스 치킨의 쿠폰
    chicken = (chicken % n) + freeChicken;
  }
  return answer;
}

console.log(solution(100)); //11
console.log(solution(1081)); //120
console.log(solution(1999)); //222
