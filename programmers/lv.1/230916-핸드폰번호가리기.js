//https://school.programmers.co.kr/learn/courses/30/lessons/12948

function solution(phone_number) {
  const show = phone_number.slice(-4);
  return show.padStart(phone_number.length, "*");
}

//slice, padStart에 대해 다시 확인 필요
