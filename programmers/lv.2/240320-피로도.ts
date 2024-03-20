//https://school.programmers.co.kr/learn/courses/30/lessons/87946
export {};

function solution(k: number, dungeons: number[][]): number {
  let answer: number = 0;
  const visited: boolean[] = Array(dungeons.length).fill(false);

  function dfs(k: number, cnt: number) {
    answer = Math.max(answer, cnt);

    for (let i = 0; i < dungeons.length; i++) {
      if (!visited[i] && dungeons[i][0] <= k) {
        visited[i] = true;
        dfs(k - dungeons[i][1], cnt + 1);
        visited[i] = false;
      }
    }
  }
  dfs(k, 0);
  return answer;
}

// prettier-ignore
console.log(solution(80,[[80,20],[50,40],[30,10]]	)); //3
