/**
 * 후위연산식이 주어지면 연산한 결과를 출력
 */
export {};

function solution(s: string): number {
  let answer: number = 0;
  const operator: number[] = [];
  for (const x of s) {
    if (!isNaN(Number(x))) operator.push(Number(x));
    else {
      let rt: number | undefined = operator.pop();
      let lt: number | undefined = operator.pop();
      if (rt !== undefined && lt !== undefined) {
        if (x === "+") operator.push(lt + rt);
        else if (x === "-") operator.push(lt - rt);
        else if (x === "*") operator.push(lt * rt);
        else if (x === "/") operator.push(lt / rt);
      }
    }
  }
  answer = operator[0];
  return answer;
}

console.log(solution("352+*9-")); //12
