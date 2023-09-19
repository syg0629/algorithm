//https://school.programmers.co.kr/learn/courses/30/lessons/12948

function solution(phone_number) {
  return phone_number.slice(-4).padStart(phone_number.length, "*");
}

// padStart에 대해 다시 확인 필요
