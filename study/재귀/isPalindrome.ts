// 팔린드롬(앞으로 읽으나 뒤로 읽으나 동일한 문자)인 경우 true 를 반환하는 isPalindrome이라는 재귀(recursive) 함수를 작성

function isPalindrome(str: string): boolean {
  let reversedStr = "";
  function reverse(str2: string): string {
    if (str2.length === 0) return "";
    return (reversedStr +=
      str2[str2.length - 1] + reverse(str2.slice(0, str2.length - 1)));
  }
  reverse(str);
  return reversedStr === str;
}

console.log(isPalindrome("awesome")); // false
console.log(isPalindrome("foobar")); // false
console.log(isPalindrome("tacocat")); // true
console.log(isPalindrome("amanaplanacanalpanama")); // true
console.log(isPalindrome("amanaplanacanalpandemonium")); // false
