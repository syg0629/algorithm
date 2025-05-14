/**
 * 스택 추상자료형
 * 1. 데이터 삽입 - push()
 * 2. 데이터 제거 - pop()
 * 3. 데이터 참조 - peek()
 * 4. 비었는지 확인 - isEmpty()
 */

import { LinkedList } from "./LinkedList.mjs";

class Stack {
  constructor() {
    this.list = new LinkedList();
  }

  push(data) {
    this.list.insertAt(0, data);
  }

  pop() {
    try {
      return this.list.deleteAt(0);
    } catch (e) {
      return null;
    }
  }

  peek() {
    return this.list.getNodeAt(0);
  }

  isEmpty() {
    return this.list.count === 0;
  }
}

export { Stack };
