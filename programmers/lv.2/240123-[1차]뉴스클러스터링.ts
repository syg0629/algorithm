//https://school.programmers.co.kr/learn/courses/30/lessons/17677
// export {};

function solution(str1: string, str2: string): number {
  function extractTwoLetter(string: string) {
    const extractedStrs: string[] = [];
    for (let i = 0; i < string.length; i++) {
      const cutTwoLetter: string = string.toUpperCase().slice(i, i + 2);
      if (cutTwoLetter.match(/[A-Z]{2}/g)) {
        extractedStrs.push(cutTwoLetter);
      }
    }
    return extractedStrs;
  }

  const extractedStr1: string[] = extractTwoLetter(str1);
  const extractedStr2: string[] = extractTwoLetter(str2);

  const set: Set<string> = new Set([...extractedStr1, ...extractedStr2]);
  let unionCnt: number = 0;
  let intersectionCnt: number = 0;

  for (const x of set) {
    const hasStr1 = extractedStr1.filter((a: string) => x === a).length;
    const hasStr2 = extractedStr2.filter((a: string) => x === a).length;
    unionCnt += Math.max(hasStr1, hasStr2);
    intersectionCnt += Math.min(hasStr1, hasStr2);
  }
  if (unionCnt === 0) {
    return 65536;
  } else {
    return Math.floor((intersectionCnt / unionCnt) * 65536);
  }
}

console.log(solution("FRANCE", "french")); //16384
console.log(solution("handshake", "shake hands")); //65536
console.log(solution("aa1+aa2", "AAAA12")); //43690
console.log(solution("E=M*C^2", "e=m*c^2")); //65536
