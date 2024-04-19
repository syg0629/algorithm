//https://leetcode.com/problems/remove-k-digits/description/?envType=daily-question&envId=2024-04-11
export {};

function removeKdigits(num: string, k: number): string {
  if (k === num.length) return "0";
  const stack: string[] = [];

  for (const x of num) {
    while (k > 0 && stack[stack.length - 1] > x) {
      stack.pop();
      k--;
    }
    stack.push(x);
  }

  while (k > 0) {
    stack.pop();
    k--;
  }

  while (stack.length && stack[0] === "0") {
    stack.shift();
  }

  return stack.length ? stack.join("") : "0";
}

console.log(removeKdigits("1432219", 3)); //"1219"
console.log(removeKdigits("10200", 1)); //"200"
console.log(removeKdigits("10", 2)); //"0"
