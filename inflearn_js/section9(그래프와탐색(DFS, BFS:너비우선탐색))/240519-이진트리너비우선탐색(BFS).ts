function solution() {
  let answer = "";
  const queue = [];

  //루트 노드라서 넣어줌
  queue.push(1);

  //queue가 비어있으면 멈춤
  while (queue.length) {
    //queue에 있는 것 하나를 꺼냄
    const v: number = queue.shift()!;
    //1과 연결된 것을 넣어줌
    answer += v + " ";

    //연결된 것을 찾아줌
    for (const nv of [v * 2, v * 2 + 1]) {
      if (nv > 7) continue;
      queue.push(nv);
    }
  }
  return answer;
}
console.log(solution());
