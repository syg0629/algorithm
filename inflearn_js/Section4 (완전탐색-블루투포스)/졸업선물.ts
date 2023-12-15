/**
 * 현재 예산으로 최대 몇 명의 학생에게 선물을 사줄 수 있는지 구하는 프로그램
 * 상품 하나를 50% 할인해서 살 수 있음
 * 배송비는 할인에 포함되지 않음
 * 학생 수 : N(1<=N<=1000)
 * 예산 : M(1<=M<=100,000,000)
 * 상품 가격은 짝수로만 입력됨.
 */
export {};

function solution(m: number, product: number[][]): number {
  let answer: number = 0;
  product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  for (let i = 0; i < product.length; i++) {
    //할인 받는 상품 하나 정해놓기
    let money: number = m - (product[i][0] / 2 + product[i][1]);
    let cnt: number = 1;

    for (let j = 0; j < product.length; j++) {
      //i는 할인된 상품이라 안됨
      //돈이 적은데도 그거에 맞출려고 계속 돌 수 있으니까 break
      if (j !== i && product[j][0] + product[j][1] > money) break;
      if (j !== i && product[j][0] + product[j][1] <= money) {
        money -= product[j][0] + product[j][1];
        cnt++;
      }
    }
    answer = Math.max(answer, cnt);
  }
  return answer;
}

//prettier-ignore
console.log(solution(28, [[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]])); //4
//prettier-ignore
console.log(solution(41, [[8, 6], [2, 2], [4, 3], [4, 5], [12, 1]])); //5
//prettier-ignore
console.log(solution(41, [[8, 6], [2, 2], [12, 1], [4, 5], [4, 3]])); //5
//prettier-ignore
console.log(solution(33, [[2, 12], [8, 4], [6, 6], [6, 7]])); //3
