//https://www.acmicpc.net/problem/2303
export {};

const fs = require('fs');
const filePath =
  process.platform === 'linux' ? '/dev/stdin' : __dirname + '/input1.txt';
const [_, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');
const arr = input.map((x: string) => x.split(' ').map(Number));

// 카드의 조합을 생성하는 함수
const getCombinations = (arr: number[], selectNum: number) => {
  const results: number[][] = [];
  if (selectNum === 1) return arr.map((value) => [value]);

  arr.forEach((fixed, index, origin) => {
    const rest = origin.slice(index + 1);
    const combinations = getCombinations(rest, selectNum - 1);
    const attached = combinations.map((combination) => [fixed, ...combination]);
    results.push(...attached);
  });
  return results;
};

// 숫자 게임의 최대 값을 찾는 함수
const findMaxNumber = (cardsList: number[][]) => {
  let maxPlayerValue = 0;
  let winnerIndex = 0;

  cardsList.forEach((cards, playerIndex) => {
    const combinations = getCombinations(cards, 3);
    let maxValue = 0;

    combinations.forEach((comb) => {
      const sumLastDigit =
        comb.reduce((acc: number, cur: number) => acc + cur, 0) % 10;
      maxValue = Math.max(maxValue, sumLastDigit);
    });

    // 현재 플레이어의 최대 값이 더 크거나 같다면 결과 업데이트
    if (maxValue >= maxPlayerValue) {
      maxPlayerValue = maxValue;
      // 인덱스를 1부터 시작하는 플레이어 번호로 변환
      winnerIndex = playerIndex + 1;
    }
  });

  return winnerIndex;
};

console.log(findMaxNumber(arr));
