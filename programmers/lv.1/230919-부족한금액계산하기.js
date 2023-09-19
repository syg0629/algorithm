//https://school.programmers.co.kr/learn/courses/30/lessons/82612

function solution(price, money, count) {
  var amt = 0;
  for (let i = 0; i <= count; i++) {
    amt += price * i;
  }
  return money > amt ? 0 : Math.abs(money - amt);
}
