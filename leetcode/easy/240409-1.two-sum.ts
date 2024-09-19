//https://leetcode.com/problems/two-sum/
export {};

function twoSum(nums: number[], target: number): number[] {
  const map: Map<number, number> = new Map();

  for (const [i, x] of nums.entries()) {
    const sub = target - x;
    if (map.get(sub) !== undefined) {
      return [map.get(sub)!, i];
    }
    map.set(x, i);
  }
  return [];
}

console.log(twoSum([2, 7, 11, 15], 9)); //[0,1]
console.log(twoSum([3, 2, 4], 6)); //[1,2]
console.log(twoSum([3, 3], 6)); //[0,1]
