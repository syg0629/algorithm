// 문자열을 받아들이고 그 문자열의 역순인 문자열을 반환하는 함수 작성

function reverse(str: string): string {
  let reversedStr = "";
  function reverseFn(str: string): string {
    if (str.length === 0) return "";
    reversedStr += str[str.length - 1];
    return reverseFn(str.slice(0, str.length - 1));
  }
  reverseFn(str);
  return reversedStr;
}

console.log(reverse("awesome")); // 'emosewa'
console.log(reverse("rithmschool")); // 'loohcsmhtir'
