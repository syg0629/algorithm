//https://leetcode.com/problems/time-needed-to-buy-tickets/description/?envType=daily-question&envId=2024-04-09
export {};

function timeRequiredToBuy(tickets: number[], k: number): number {
  let totalTime: number = 0;
  const targetTicketCnt: number = tickets[k];

  for (let i = 0; i < tickets.length; i++) {
    const currentTicketCnt: number =
      i <= k ? targetTicketCnt : targetTicketCnt - 1;
    totalTime += Math.min(currentTicketCnt, tickets[i]);
  }
  return totalTime;
}

console.log(timeRequiredToBuy([2, 3, 2], 2)); //6
console.log(timeRequiredToBuy([5, 1, 1, 1], 0)); //8
