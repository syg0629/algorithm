// https://school.programmers.co.kr/learn/courses/30/lessons/12909
//시간 초과

// function solution(s) {
//   for (let i = s.length; i > 1; i -= 2) {
//     s = s.replace("()", "");
//   }
//   return s === "" ? true : false;
// }

// function solution(s) {
//   for (let i = s.length; i > 0; i -= 2) {
//     s = s
//       .split("()")
//       .filter((n) => n !== "")
//       .join("");
//   }
//   return s === "" ? true : false;
// }

// function solution(s) {
//   for (let i = s.length; i > 0; i -= 2) {
//     if (s === "" || s === "()") return true;
//     s = s
//       .split("()")
//       .filter((n) => n !== "")
//       .join("");
//   }
//     return false;
// }

// function solution(s) {
//   if (s.charAt(0) === ")") return false;
//   let arr = [];
//   s.split("").forEach((n) => (n === "(" ? arr.push("(") : arr.pop()));
//   return arr.length === 0 ? true : false;
// }

function solution(s) {
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === "(") {
      count++;
    } else {
      count--;
      if (count < 0) return false;
    }
  }
  return count === 0;
}

console.log(solution("()()")); //true
console.log(solution("(())()")); //true
console.log(solution(")()(")); //false
console.log(solution("(()(")); //false
console.log(solution("())(()")); //false
