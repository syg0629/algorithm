/**
 * 연결리스트 - 데이터를 담은 노드를 서로 연결하는 구조
 * 추상자료형
 * 1. 모든 데이터 출력 - printAll()
 * 2. 모든 데이터 제거 - clear()
 * 3. 인덱스 삽입 - insertAt(index, data)
 * 4. 마지막 삽입 - insertLast(data)
 * 5. 인덱스 삭제 - deleteAt(index)
 * 6. 마지막 삭제 - deleteLast()
 * 7. 인덱스 읽기 - getNodeAt(index)
 */
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.count = 0;
  }

  printAll() {
    let currentNode = this.head;
    let text = "[";

    while (currentNode !== null) {
      text += currentNode.data;
      currentNode = currentNode.next;

      if (currentNode !== null) {
        text += ", ";
      }
    }
    text += "]";
    console.log(text);
  }

  clear() {
    this.head = null;
    this.count = 0;
  }

  insertAt(index, data) {
    if (index > this.count || index < 0) {
      throw new Error("범위를 넘어갔습니다.");
    }
    const newNode = new Node(data);
    if (index === 0) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }
    this.count++;
  }

  insertLast(data) {
    this.insertAt(this.count, data);
  }

  deleteAt(index) {
    if (index >= this.count || index < 0) {
      throw new Error("제거할 수 없습니다.");
    }

    let currentNode = this.head;
    if (index === 0) {
      const deletedNode = this.head;
      this.head = this.head.next;
      this.count--;
      return deletedNode;
    } else {
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      const deletedNode = currentNode.next;
      currentNode.next = currentNode.next.next;
      this.count--;
      return deletedNode;
    }
  }

  deleteLast() {
    return this.deleteAt(this.count - 1);
  }

  getNodeAt(index) {
    if (index >= this.count || index < 0) {
      throw new Error("범위를 넘어갔습니다.");
    }

    let currentNode = this.head;
    for (let i = 0; i < index; i++) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }
}

export { Node, LinkedList };
