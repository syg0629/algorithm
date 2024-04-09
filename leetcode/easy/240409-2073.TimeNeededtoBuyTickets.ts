//https://leetcode.com/problems/time-needed-to-buy-tickets/description/?envType=daily-question&envId=2024-04-09
export {};

function timeRequiredToBuy(tickets: number[], k: number): number {
  let totalTime: number = 0;

  for (let i = 0; i < tickets.length; i++) {
    if (i <= k) {
      // k 위치 이전에 있는 티켓
      totalTime += Math.min(tickets[k], tickets[i]);
    } else {
      // k 위치 이후에 있는 티켓
      totalTime += Math.min(tickets[k] - 1, tickets[i]);
    }
  }
  return totalTime;
}

console.log(timeRequiredToBuy([2, 3, 2], 2)); //6
console.log(timeRequiredToBuy([5, 1, 1, 1], 0)); //8
