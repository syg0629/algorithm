//https://school.programmers.co.kr/learn/courses/30/lessons/17680
export {};

function solution(cacheSize: number, cities: string[]): number {
  const cache: Map<string, boolean> = new Map();
  let executionTime = 0;

  for (const x of cities) {
    const city: string = x.toLowerCase();

    if (cache.has(city)) {
      cache.delete(city);
      cache.set(city, true);
      executionTime++;
    } else {
      if (cacheSize === cache.size) {
        cache.delete(cache.keys().next().value);
      }
      if (cacheSize > 0) {
        cache.set(city, true);
      }
      executionTime += 5;
    }
  }
  return executionTime;
}

//prettier-ignore
console.log(solution(3,["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "Jeju", "Pangyo", "Seoul", "NewYork", "LA"])) //50
//prettier-ignore
console.log(solution(3,["Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul", "Jeju", "Pangyo", "Seoul"])) //21
//prettier-ignore
console.log(solution(2,["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"])) //60
//prettier-ignore
console.log(solution(5,["Jeju", "Pangyo", "Seoul", "NewYork", "LA", "SanFrancisco", "Seoul", "Rome", "Paris", "Jeju", "NewYork", "Rome"])) //52
//prettier-ignore
console.log(solution(2,["Jeju", "Pangyo", "NewYork", "newyork"])) //16
//prettier-ignore
console.log(solution(0,["Jeju", "Pangyo", "Seoul", "NewYork", "LA"])) //25
