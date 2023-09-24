//https://school.programmers.co.kr/learn/courses/30/lessons/12954
import _ from "lodash";

function solution(x, n) {
  return _.range(1, n + 1).map((i) => i * x);
}
