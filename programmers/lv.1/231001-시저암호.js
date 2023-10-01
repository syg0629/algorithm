//https://school.programmers.co.kr/learn/courses/30/lessons/12926

function solution(s, n) {
  const convertASCII = s.split("").map((x) => x.charCodeAt());

  for (let i = 0; i < convertASCII.length; i++) {
    //공백은 밀어도 공백, ASCII : 32
    if (convertASCII[i] !== 32) {
      //대문자 ASCII : 65 ~ 90
      if (convertASCII[i] >= 65 && convertASCII[i] <= 90) {
        convertASCII[i] += n;
        //더한 값이 Z(90)이 넘으면 A(65)로
        if (convertASCII[i] > 90) convertASCII[i] -= 26;
      }
      //소문자 ASCII : 97 ~ 122
      if (convertASCII[i] >= 97 && convertASCII[i] <= 122) {
        convertASCII[i] += n;
        //더한 값이 z(122)이 넘으면 a(97)로
        if (convertASCII[i] > 122) convertASCII[i] -= 26;
      }
    }
  }
  return convertASCII.map((x) => String.fromCharCode(x)).join("");
}

console.log(solution("AB", 1)); //"BC"
console.log(solution("z", 1)); //"a"
console.log(solution("Z", 1)); //"A"
console.log(solution("a B z", 4)); //"e F d"
console.log(solution("a B Z", 4)); //"e F D"
console.log(solution("a B z", 25)); //"z A y"
