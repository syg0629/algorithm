//https://school.programmers.co.kr/learn/courses/30/lessons/70129
import _ from "lodash";

function solution(s) {
  let remove = 0;
  let arr0 = 0;
  let count = 0;
  while (s.length > 1) {
    s = s.split("");
    arr0 = s.filter((x) => x == 0).length;
    remove += arr0;
    s = _.range(1, s.length - arr0 + 1, 0).length.toString(2);
    count++;
  }
  return [count, remove];
}
