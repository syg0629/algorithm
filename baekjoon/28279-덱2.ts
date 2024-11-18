//https://www.acmicpc.net/problem/28279
export {};

const fs = require("fs");
const filePath =
  process.platform === "linux" ? "/dev/stdin" : __dirname + "/input1.txt";
const [_, ...input] = fs.readFileSync(filePath).toString().trim().split("\n");

interface Items {
  [key: number]: string;
}

class Deque {
  head: number;
  tail: number;
  items: Items;
  length: number;
  constructor() {
    this.head = 0;
    this.tail = 0;
    this.items = {};
    this.length = 0;
  }

  pushFront(value: string) {
    this.head--;
    this.items[this.head] = value;
    this.length++;
  }

  pushBack(value: string) {
    this.items[this.tail] = value;
    this.tail++;
    this.length++;
  }

  popFront() {
    if (this.length === 0) return -1;
    const value = this.items[this.head];
    delete this.items[this.head];
    this.head++;
    this.length--;
    return value;
  }

  popBack() {
    if (this.length === 0) return -1;
    this.tail--;
    const value = this.items[this.tail];
    delete this.items[this.tail];
    this.length--;
    return value;
  }

  size() {
    return this.length;
  }

  empty() {
    return this.length === 0 ? 1 : 0;
  }

  front() {
    return this.length === 0 ? -1 : this.items[this.head];
  }

  back() {
    return this.length === 0 ? -1 : this.items[this.tail - 1];
  }
}

const deque = new Deque();
const answer = [];

for (const x of input) {
  if (x.startsWith("1")) {
    deque.pushFront(x.split(" ")[1]);
  }
  if (x.startsWith("2")) {
    deque.pushBack(x.split(" ")[1]);
  }
  if (x === "3") {
    answer.push(deque.popFront() || -1);
  }
  if (x === "4") {
    answer.push(deque.popBack() || -1);
  }
  if (x === "5") {
    answer.push(deque.size());
  }
  if (x === "6") {
    answer.push(deque.empty());
  }
  if (x === "7") {
    answer.push(deque.front());
  }
  if (x === "8") {
    answer.push(deque.back());
  }
}
console.log(answer.join("\n"));
